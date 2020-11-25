import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators/map';
import { Router, Params } from "@angular/router";
import * as config from "./config/config";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

export interface UserDetails {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  referralCode: string;
  role;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
  ttl: Number;
}

@Injectable()
export class AuthenticationService {
  // public baseUrl = 'http://139.59.224.233:3084';
  public baseUrl: String;
  // public baseUrl = '';
  private mediaBaseUrl: String;

  private token: string;

  headerText: BehaviorSubject<any>;
  apiKey = "bGN5YXNI";

  constructor(
    private http: HttpClient,
    private router: Router // public sysConfig: ConfigService
  ) {
    this.baseUrl = config.baseUrl;
    this.mediaBaseUrl = config.mediaBaseUrl;
    this.headerText = new BehaviorSubject([]);
  }

  private saveToken(token: string): void {
    localStorage.setItem("mean-token", token);
    this.token = token;
  }

  public getAuthToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("mean-token");
    }
    return this.token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("mean-token");
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      let userDetails = localStorage.getItem("user");
      if (userDetails) {
        return JSON.parse(userDetails);
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return true;
    }
    return false;
  }

  // public isLoggedIn(): boolean {
  //   const user = this.getUserDetails();
  //   if (user) {

  //     return user.exp > Date.now();
  //   } else {
  //     return false;
  //   }
  // }

  public fileRequest(
    method: "post",
    type: String,
    data?: any
  ): Observable<any> {
    let fileUpload;
    if (method === "post") {
      fileUpload = this.http.post(`${this.mediaBaseUrl}/${type}`, data, {
        headers: { Authorization: `Bearer ${this.getToken()}` },
      });
    }
    return fileUpload;
  }

  // public getFile(value) {
  //   return `${this.mediaBaseUrl}${value}`;
  // }

  public request(
    method: "post" | "get" | "put" | "delete" | "patch" | "file",
    type: String,
    data?: any
  ): Observable<any> {
    let base;

    if (method === "post") {
      if (type === "users/login" || type === "register" || type === "auth") {
        base = this.http.post(`${this.baseUrl}/${type}`, data, {
          headers: config.apiKey,
        });
      } else {
        var headerPost = new HttpHeaders({
          key: this.apiKey,
          jw_token: this.getToken(),
        });
        base = this.http.post(`${this.baseUrl}/${type}`, data, {
          headers: headerPost,
        });
      }
    } else if (method === "put") {
      base = this.http.put(`${this.baseUrl}/${type}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken()}`,
        },
      });
    } else if (method === "patch") {
      base = this.http.put(`${this.baseUrl}/${type}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken()}`,
        },
      });
    } else if (method === "delete") {
      base = this.http.delete(`${this.baseUrl}/${type}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken()}`,
        },
      });
    } else if (method === "file") {
      base = this.http.post(`${this.baseUrl}/${type}`, data, {
        headers: { Authorization: `Bearer ${this.getToken()}` },
      });
    } else {
      if (data) {
        base = this.http.get(`${this.baseUrl}/${type}`, {
          params: data,
          headers: config.apiKey,
        });
      } else {
        var header = new HttpHeaders({
          key: this.apiKey,
          jw_token: this.getToken(),
        });
        base = this.http.get(`${this.baseUrl}/${type}`, {
          headers: header,
        });
      }
    }
    return base;
  }

  public saveUserDetails = (details) => {
    let data = details.res;
    if (data && data.jw_token && data.roles) {
      this.saveToken(data.jw_token);
      const userData: UserDetails = {
        id: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        phoneNumber: data.phone_number,
        email: data.email,
        referralCode: data.referral_code,
        role: data.roles,
      };
      localStorage.setItem("user", JSON.stringify(userData));
    }
    return data;
  };

  public call(
    methodName,
    methodType: "post" | "get" | "put" | "delete",
    data = {}
  ): Observable<any> {
    return this.request(methodType, methodName, data);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request("post", "users/login?include=user", user);
  }

  public logout(): void {
    // /Users/logout
    this.token = "";
    // this.request('post', 'users/logout', {}).subscribe((response) => {
    window.localStorage.removeItem("mean-token");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("ul");
    this.router.navigateByUrl("auth/login");
    // }, (err) => {
    //   window.localStorage.removeItem('mean-token');
    //   window.localStorage.removeItem('user');
    //   this.router.navigateByUrl('auth/login');
    // });
  }

  public logoutWithoutRedirect(): void {
    this.token = "";
    this.request("post", "users/logout", {}).subscribe(
      (response) => {
        window.localStorage.removeItem("mean-token");
      },
      (err) => {
        window.localStorage.removeItem("mean-token");
      }
    );
  }

  public getPreviousMeal(data) {
    return this.http.post<any>(
      this.baseUrl + "/mealbookingcontroller/mealbookingforweek",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken()}`,
        },
      }
    );
  }

  public bookConfRoom(data) {
    return this.http.post<any>(
      this.baseUrl + "/confroombookingcontroller/confroomblock",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken()}`,
        },
      }
    );
  }

  public plantBookConfRoom(data) {
    return this.http.post<any>(
      this.baseUrl + "/plantConfRoomBookingController/plantconfroomblock",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken()}`,
        },
      }
    );
  }

  public getBookedMealOfEmployee() {
    return this.http.get<any>(
      this.baseUrl + "/mealbookingcontroller/mealbooking",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken()}`,
        },
      }
    );
  }

  getBookedDateFromAPI(value) {
    return this.http.get<any>(
      this.baseUrl + "/heatmapcontroller/heatmapview/" + value,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken()}`,
        },
      }
    );
  }

  plantConfRoomHeatMapList(value) {
    return this.http.get<any>(
      this.baseUrl + "/heatmapcontroller/plantheatmapview/" + value,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken()}`,
        },
      }
    );
  }

  resetPassword(data) {
    return this.http.post<any>(
      this.baseUrl + "/users/sendResetPasswordMailLink",
      data
    );
  }

  getValidResetPasswordToken(ResetToken) {
    return this.http.get<any>(
      this.baseUrl + "/users/validateToken?token=" + ResetToken
    );
  }

  setNewPassword(data) {
    return this.http.post<any>(this.baseUrl + "/users/resetPassword", data);
  }

  getUserPrivilege() {
    return this.http.get<any>(this.baseUrl + "/users/rolebaseaccess", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`,
      },
    });
  }

  getEmployeeBirthDay() {
    return this.http.get<any>(this.baseUrl + "/fe/birthday", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`,
      },
    });
  }

  getCraneHydraDropDown(mark, path) {
    switch (mark) {
      case 1:
        let url =
          this.baseUrl +
          "/fe/dropdownlist?formCode=10&fieldName=" +
          path +
          "&parent=0";
        return this.http.get<any>(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case 2:
        let craneRequestUrl =
          this.baseUrl + "/craneandhydracontroller/craneandhydra?mode=0";
        return this.http.post<any>(craneRequestUrl, path, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case 3:
        let craneBookingListUrl = this.baseUrl + path;
        return this.http.get<any>(craneBookingListUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case 4:
        let craneBookingByIdUrl =
          this.baseUrl + "/craneandhydracontroller/craneandhydra/" + path;
        return this.http.get<any>(craneBookingByIdUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case 5:
        let craneRequestDraftUrl =
          this.baseUrl + "/craneandhydracontroller/craneandhydra?mode=1";
        return this.http.post<any>(craneRequestDraftUrl, path, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
    }
  }

  hrelFlatAllocation(data) {
    let submitHrelFaltAllocation =
      this.baseUrl + "/hrelcontroller/flatallocation";
    return this.http.post<any>(submitHrelFaltAllocation, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`,
      },
    });
  }

  hrelMaintenence(data) {
    let submitHrelFaltAllocation =
      this.baseUrl + "/hrelcontroller/maintainance";
    return this.http.post<any>(submitHrelFaltAllocation, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`,
      },
    });
  }

  plantEngineeringDCCData(mark, data) {
    switch (mark) {
      case "serviceDescription":
        let serviceListUrl =
          this.baseUrl +
          "/fe/dropdownlist?formCode=11&fieldName=ServiceDescription&parent=0";
        return this.http.get<any>(serviceListUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "paperSize":
        let papaerSizeUrl =
          this.baseUrl +
          "/fe/dropdownlist?formCode=11&fieldName=PaperSize&parent=0";
        return this.http.get<any>(papaerSizeUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "Print/Scan":
        let printScannerUrl =
          this.baseUrl +
          "/fe/dropdownlist?formCode=11&fieldName=Print/ScanType&parent=0";
        return this.http.get<any>(printScannerUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "Drawing/Scan":
        let drawingScanUrl =
          this.baseUrl +
          "/fe/dropdownlist?formCode=11&fieldName=Drawing/ScanFormat&parent=0";
        return this.http.get<any>(drawingScanUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "DrawingPresentation":
        let DrawingPresentationUrl =
          this.baseUrl +
          "/fe/dropdownlist?formCode=11&fieldName=DrawingPresentationType&parent=0";
        return this.http.get<any>(DrawingPresentationUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "DocumentField":
        let DocumentFieldUrl =
          this.baseUrl +
          "/fe/dropdownlist?formCode=11&fieldName=DocumentField&parent=0";
        return this.http.get<any>(DocumentFieldUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "teamleads":
        let teamleadsUrl = this.baseUrl + "/fe/teamleads";
        return this.http.get<any>(teamleadsUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "draftDccForm":
        let submitDccFormUrl = this.baseUrl + "/dcccontroller/dcc?mode=0";
        return this.http.post<any>(submitDccFormUrl, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "dccBookingList":
        let dccBookingListUrl = this.baseUrl + "/dcccontroller/dcc";
        return this.http.get<any>(dccBookingListUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "getDccById":
        let getDccByIdUrl = this.baseUrl + "/dcccontroller/dcc/" + data;
        return this.http.get<any>(getDccByIdUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "submitDccForm":
        let submitDccUrl = this.baseUrl + "/dcccontroller/dcc?mode=1";
        return this.http.post<any>(submitDccUrl, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "plantProject":
        let plantProjectUrl =
          this.baseUrl +
          "/fe/dropdownlist?formCode=11&fieldName=PlantProject&parent=0";
        return this.http.get<any>(plantProjectUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
    }
  }

  temporaryIssueOfElectricalItem(path, data) {
    switch (path) {
      case "draftForm":
        let draftFormUrl = this.baseUrl;
    }
  }

  plantConfProjectorList() {
    let projectListUrl =
      this.baseUrl +
      "/fe/dropdownlist?formCode=12&fieldName=ProjectorRequired&parent=0";
    return this.http.get<any>(projectListUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`,
      },
    });
  }

  plantConfSpecialPurpose() {
    let specialPurpose =
      this.baseUrl +
      "/fe/dropdownlist?formCode=12&fieldName=SpecialRequirment&parent=0";
    return this.http.get<any>(specialPurpose, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`,
      },
    });
  }

  recreationHallRoomBooking(path, data) {
    switch (path) {
      case "purpose":
        let purposeUrl =
          this.baseUrl +
          "/fe/dropdownlist?formCode=13&fieldName=Purpose&parent=0";
        return this.http.get<any>(purposeUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "type":
        let typeUrl =
          this.baseUrl +
          "/fe/dropdownlist?formCode=13&fieldName=Type&parent=" +
          data;
        return this.http.get<any>(typeUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "save":
        let saveUrl =
          this.baseUrl +
          "/recreationclubbookingcontroller/recreationclubbooking";
        return this.http.post<any>(saveUrl, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "list":
        let listUrl =
          this.baseUrl +
          "/recreationclubbookingcontroller/recreationclubbooking";
        return this.http.get<any>(listUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
      case "cancel":
        console.log("cancel id ", data);
        let cancelUrl =
          this.baseUrl +
          `/recreationclubbookingcontroller/recreationclubbookingcancel${data}`;
        return this.http.put<void>(cancelUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getToken()}`,
          },
        });
    }
  }

  getHeader() {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
  }

  tieBooking(path, data) {
    switch (path) {
      case "IssuedToDropdown":
        let issuedToDropdownUrl =
          this.baseUrl +
          "/fe/dropdownlist?formCode=3&fieldName=IssuedTo&parent=0";
        return this.http.get<any>(issuedToDropdownUrl, this.getHeader());
    }
  }

  getUser() {
    setTimeout(() => this.logout(), 30 * 60 * 1000);
  }

  capitalExpenditure(data) {
    let submitHrelFaltAllocation = this.baseUrl + "/cecontroller/ce";
    return this.http.post<any>(submitHrelFaltAllocation, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`,
      },
    });
  }
}
