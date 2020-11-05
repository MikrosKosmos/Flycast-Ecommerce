import {Injectable} from '@angular/core';

@Injectable()
export class HelperService {

  getDateAndTime(data) {
    return new Date(data);
  }

}
