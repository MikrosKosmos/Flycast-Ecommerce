import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from 'src/app/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'emp-support-open-task',
  templateUrl: './support-open-task.component.html',
  styleUrls: ['./support-open-task.component.scss']
})
export class SupportOpenTaskComponent implements OnInit {
  public taskDetails;
  public taskId;
  public userDetails: UserDetails;
  public fullName;

  public workFlowDetails;
  public workFlowRouteMapDetails: any;
  public data = {
    'tlName': [{
    }],
    'category': [
    ],
    'subcategory': [
    ]
  }

  files = [];

  cesSupportForm: FormGroup;
  cesLeaderSupportForm: FormGroup;
  constructor(
    private _authService: AuthenticationService,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private route: Router,
  ) { }

  ngOnInit() {

    this.userDetails = this._authService.getUserDetails()
    this.fullName = this.userDetails.firstName + ' ' + this.userDetails.lastName

    this.cesSupportForm = this._formBuilder.group({
      requestorName: ['', Validators.compose([Validators.required])],
      empCode: ['', Validators.compose([Validators.required])],
      department: ['', Validators.compose([Validators.required])],
      grade: ['', Validators.compose([Validators.required])],
      requestorLocation: ['', Validators.compose([Validators.required])],
      mobileNo: ['', Validators.compose([])],
      contactNo: ['', Validators.compose([Validators.required])],
      serviceCategory: ['', Validators.compose([Validators.required])],
      serviceSubCategory: ['', Validators.compose([Validators.required])],
      justification: ['', Validators.compose([Validators.required])],
      requirement: ['', Validators.compose([Validators.required])],
      recommendingAuhorityDisplayName: [''],
      serviceCategoryDisplayName: [''],
      serviceSubCategoryDisplayName: ['']
    });


    this.cesLeaderSupportForm = this._formBuilder.group({
      comment: ['', Validators.compose([Validators.required])],
      action: [''],
      status: [''],
    })


    this.taskId = this._activatedRoute.snapshot.params.taskId;
    if (this.taskId) {
      this.fetchCesFormDetailsById();
      this.fetchCesWfInstance();
      this.fetchAttachments();
      this.fetchWorkFlowDetails();
    }

  }

  fetchCesFormDetailsById() {
    this._authService.request('get', `cescontroller/cesnewrequest/${this.taskId}`).subscribe((response) => {
      this.taskDetails = { ...response };
      this._authService.headerText.next({
        headerStrong: this.taskDetails.status,
        headerText: ""
      });
      this.setValueToForm();
    })
  }

  fetchCesWfInstance() {
    this._authService.request('get', `cescontroller/getWfActions?formCode=1&txId=${this.taskId}`).subscribe((response) => {
      this.workFlowDetails = response;
    })
  }

  setValueToForm() {
    const currentCes = { ...this.taskDetails };
    if (currentCes && currentCes.createdByDetails) {
      this.cesSupportForm.patchValue({
        requestorName: currentCes.createdByDetails['firstName'] + ' ' + currentCes.createdByDetails['lastName'],
        empCode: currentCes.createdByDetails['employeeId'],
        department: currentCes.createdByDetails['orgDisplayName'],
        grade: currentCes.createdByDetails['gradeDisplayName'],
        requestorLocation: currentCes.requestorLocation,
        recommendingAuhorityDisplayName: currentCes.recommendingAuhorityDisplayName,
        mobileNo: currentCes.createdByDetails['phone'],
        contactNo: currentCes.createdByDetails['extNo'],
        serviceCategoryDisplayName: currentCes.serviceCategoryDisplayName,
        serviceSubCategoryDisplayName: currentCes.serviceSubCategoryDisplayName,
        justification: currentCes.justification,
        requirement: currentCes.requirement,
      })
    }
  }

  // getSanctioningAuthority() {
  //   this._authService.request('get', `fe/getTLS?empId=${this.userDetails.id}`).subscribe((response) => {
  //     this.data['tlName'] = response;
  //   })

  // }

  // getServiceCategory() {
  //   this._authService.request('get', `fe/getList?formCode=1&fieldName=ServiceCategory&parent=0`).subscribe((response) => {
  //     this.data['category'] = response;
  //   })
  // }

  // getServiceSubCategory(event) {
  //   this._authService.request('get', `fe/getList?formCode=1&fieldName=ServiceSubCategory&parent=${event}`).subscribe((response) => {
  //     this.data['subcategory'] = response;
  //   })
  // }

  fetchAttachments() {
    this._authService.request('get', `fe/attachmentRecord?formCode=1&txId=${this.taskId}`).subscribe((response) => {

      this.files = response;
    })
  }

  fetchWorkFlowDetails(){
    this._authService.request('get',`fe/wfStatusHistory/${this.taskId}`).subscribe((response)=>{
      this.workFlowRouteMapDetails = {...response};
    })
  }


  submitCesSupport() {
    this.cesLeaderSupportForm.patchValue({
      action: 'support',
      status: this.taskDetails.status
    })
    this._authService.request('put', `cescontroller/ceshistory/${this.taskDetails.cesId}?userId=${this.userDetails.id}`, this.cesLeaderSupportForm.value).subscribe((response) => {
      this.route.navigateByUrl('/dashboard')
    })
  }
}
