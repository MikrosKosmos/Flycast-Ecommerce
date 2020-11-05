import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'emp-hpl-work-flow',
  templateUrl: './hpl-work-flow.component.html',
  styleUrls: ['./hpl-work-flow.component.scss']
})
export class HplWorkFlowComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
  
  }

  getLabelName(assignedName) {
    switch (assignedName) {
      case 'I_INITIATOR':
        return 'INITIATOR';
      case 'I_INITIATOR_TL':
        return 'INITIATOR TEAM LEADER';
      case 'G_CES_TL':
        return 'CES TEAM LEADER';
      case 'I_CES_HOD':
        return 'CES HOD'
      case 'G_CES_TEAM_IMPL':
        return 'CES IMPLEMENTATION TEAM';
      case 'G_PLANT_TELE_SUPPORT':
        return 'PLANT TELECOM SUPPORT';
      case 'G_CWS_TEAM':
        return 'CWS TEAM';
      case 'I_PROPOSAL_SUPPORTED_BY_1':
        return 'PROPOSAL SUPPORTED BY 1'
      case 'I_PROPOSAL_SUPPORTED_BY_2':
        return 'PROPOSAL SUPPORTED BY 2';
      case 'I_PROPOSED_BY':
        return 'PROPOSED BY';
      case 'I_TECHNICAL_RELEASE':
        return 'TECHNICAL RELEASE';
      case 'I_APPROVE':
        return 'APPROVE';
      case 'I_FINANCE_SUPPORT':
        return 'FINANCE SUPPORT';
      case 'I_FINANCE_RELEASE':
        return 'FINANCE RELEASE';
      case 'HALDIA_Admin_Training_Hall':
        return 'HALDIA ADMIN TRAINING HALL';
      case 'HALDIA_Admin_Club_Booking':
        return 'HALDIA ADMIN CLUB BOOKING';
      case 'G_DCC_TEAM':
        return 'DCC TEAM';
      case 'I_HOD_MECHANICAL':
        return 'HOD MECHANICAL';
      case 'I_HEAD_ENGG':
        return 'HEAD ENGG';
      case 'G_MATERIAL_ISSUER' :
        return 'MATERIAL ISSUER';
      case 'I_ELECTRICAL_PERSON':
        return 'ELECTRICAL PERSON';
      case 'I_HOD_ELECTRICAL':
        return 'HOD ELECTRICAL';
      case 'I_HOD_FINANCE':
        return 'HOD FINANCE';
      case 'G_PLANT_TELECOM':
        return 'PLANT TELECOM';
      case 'I_SUPPORTED_BY' :
        return 'SUPPORTED BY';
      case 'I_CONCURRED_BY' :
        return 'CONCURRED BY';
      case 'I_APPROVED_BY':
        return 'APPROVED BY';
      case 'I_TECHNOLOGY' :
        return 'TECHNOLOGY';
      case 'I_HEAD_OF_THE_DEPARTMENT':
        return 'HEAD OF THE DEPARTMENT';
      case 'I_HEAD_HSEF' :
        return 'HEAD OF HSEF';
      case 'I_HEAD_MANUFACTURING':
        return 'MANUFACTURING HEAD';
      case 'I_HEAD_ENGINEERING' :
        return 'ENGINEERING HEAD';
      case 'I_HEAD_TECHNOLOGY' :
        return 'TECHNOLOGY HEAD';
      case 'I_APPROVING_AUTHORITY':
        return 'APPROVING AUTHORITY';
      case 'I_TL_OF_DEPARTMENT_1ST_APPROVER' :
        return 'TL DEPARTMENT 1ST APPROVER';
      case 'I_TL_OF_DEPARTMENT_2ND_APPROVER' :
        return 'TL OF DEPARTMENT 2ND APPROVER';
      case 'I_TL_OF_DEPARTMENT_3RD_APPROVER' :
        return 'TL OF DEPARTMENT 3RD APPROVER';
      case 'I_TL_OF_DEPARTMENT_4TH_APPROVER' :
        return 'TL OF DEPARTMENT 4TH APPROVER';
      case 'G_HREL_MAINTAINANCE' :
        return 'HREL MAINTAINANCE';
      case 'I_INITIATOR_I' :
        return 'INITIATOR';
      case 'I_IMMEDIATE_REPORTING_PERSON' :
        return 'IMMEDIATE REPORTING PERSON';
      case 'G_SAFETY_DEPARTMENT' :
        return 'SAFETY DEPARTMENT';
      case 'G_IMPLEMENTATION_REPORT' :
        return 'IMPLEMENTATION REPORT';
      case 'G_FIRE_DEPARTMENT' : 
        return 'FIRE DEPARTMENT';
      case 'I_ENGINEER_IN_CHARGE' :
        return 'ENGINEER IN CHARGE';
      case 'I_FINANCE_PERSON' :
        return 'FINANCE PERSON';
      case 'I_REGIONAL_FINANCE' :
        return 'REGIONAL FINANCE';
      case 'I_REGIONAL_MANAGER' :
        return 'REGIONAL MANAGER';
      case 'I_MARKETING_FINANCE':
        return 'MARKETING FINANCE';
      case 'I_HEAD_LOGISTIC':
        return 'HEAD LOGISTIC';
      case 'I_HEAD_MKTG_FINANCE_SUPPORT':
        return 'HEAD MKTG FINANCE SUPPORT';
      case 'I_HEAD_PRODUCT_GROUP':
        return 'HEAD PRODUCT GROUP';
      case 'I_MKTG_FINANCE_CONCURRENCE':
        return 'MKTG FINANCE CONCURRENCE';
      case 'I_HEAD_MKTG':
        return 'HEAD MKTG';
      case 'I_INSURANCE_CLAIM_LODGEMENT':
        return 'INSURANCE CLAIM LODGEMENT'; 
      case 'I_INSURANCE_CLAIM_SETTLEMENT':
        return 'INSURANCE CLAIM SETTLEMENT';
      case 'I_PLANT_TL':
        return 'PLANT TEAM LEADER';
      case 'I_PLANT_HEAD':
        return 'PLANT HEAD';
      case 'I_PLANT_TL_I':
        return 'PLANT TEAM LEADER';
      case 'G_FRONT_OFFICER':
        return 'FRONT OFFICER';
      case 'G_BACK_OFFICE' :
        return 'BACK OFFICE';
      case 'I_CONCURRENCE' :
        return 'CONCURRENCE';
      case 'G_REGIONAL_OFFICE':
        return 'REGIONAL OFFICE';
      case 'G_FIRST_LEVEL_ASSIGNEE' :
        return 'FIRST LEVEL ASSIGNEE';
      case 'G_REGIONAL_MANAGER' :
        return 'REGIONAL MANAGER';
      case 'G_HEAD_PDTS':
        return 'HEAD PDTS';
      case 'G_QA':
        return 'QA';
      case 'G_MANUFACTURING':
        return 'MANUFACTURING';
      case 'G_TECHNOLOGY':
        return 'TECHNOLOGY';
      case 'G_FIRST_LEVEL_ASSIGNEE_G':
        return 'FIRST LEVEL ASSIGNEE';
      case 'I_CUSTOMER_SERVICE':
        return 'CUSTOMER SERVICE';
      case 'G_PP':
        return 'PP';
      case 'G_PE':
        return 'PE';
      case 'I_HEAD_MARKETING_FINANCE':
        return 'HEAD MARKETING FINANCE';
      case 'I_SR_GM_MKTG':
        return 'SR GM MKTG';
      case 'I_CREDIT_NOTE':
        return 'CREDIT NOTE';
      case 'G_DCC_TEAM_G':
        return 'DCC TEAM';
      case 'G_INSPECTOR':
        return 'INSPECTOR';
      case 'I_INDIVIDUAL':
        return 'INDIVIDUAL';
      case 'G_SPCL_NORML_TEAM':
        return 'SPECIAL TEAM / NORMAL TEAM';
      case 'I_ACTION':
        return 'ACTION BY'
      case 'I_TL':
        return 'TEAM LEADER';
      case 'I_INITIATOR_I_I': 
        return 'INITIATOR';
      case 'I_IMMEDIATE_REPORTING_PERSON_I':
        return 'IMMEDIATE REPORTING PERSON';
      case 'I_HEAD_HSEF_I':
        return 'HEAD HSEF';
      default: return assignedName;
    }
  }

}
