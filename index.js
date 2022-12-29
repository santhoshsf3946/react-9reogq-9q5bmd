import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, ExcelExport, PdfExport, Group } from '@syncfusion/ej2-react-grids';
import { employeeDetails } from './data';
import { updateSampleSection } from './sample-base';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { PropertyPane } from './property-pane';
function Exporting() {
    const toolbarOptions = ['ExcelExport', 'PdfExport', 'CsvExport'];
    let gridInstance;
    const data = [

      {
  
          "Id": 15,
  
          "subject": " Delivery - c44 -  Vendor  : (Vendor 7njmjhhhhhnn | ssss),(Vendor 7njmjhhhhhnn | test),(test | sfdsfs),(test | kljew)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 5,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-11-29T06:00:00.000Z",
  
          "end": "2022-11-29T06:30:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApCw=",
  
          "carrierName": "c44",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 13,
  
              "event_id": 15,
  
              "vendor_id": 1,
  
              "created": "2022-11-17T19:46:59.58",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-17T19:46:59.58",
  
              "notes": "ssss",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "ssss",
  
                  "inactive": false,
  
                  "id": 13,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "test",
  
                  "inactive": false,
  
                  "id": 47,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "sfdsfs",
  
                  "inactive": false,
  
                  "id": 63,
  
                  "vendor_id": 3
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "kljew",
  
                  "inactive": false,
  
                  "id": 80,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null,
  
              null,
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | ssss)",
  
              "(Vendor 7njmjhhhhhnn | test)",
  
              "(test | sfdsfs)",
  
              "(test | kljew)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "698ae4bf-54ea-ad9f-48b9-bab6c5cb97ca"
  
      },
  
      {
  
          "Id": 18,
  
          "subject": " Delivery - c55 -  Vendor  : (New vendor | nv33333),(Vendor 7njmjhhhhhnn | dd),(Vendor 7njmjhhhhhnn | s),(test | s)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 6,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-11-29T06:30:00.000Z",
  
          "end": "2022-11-29T07:00:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApC8=",
  
          "carrierName": "c55",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 16,
  
              "event_id": 18,
  
              "vendor_id": 1,
  
              "created": "2022-11-20T20:27:50.237",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-21T16:32:19.443",
  
              "notes": "78",
  
              "inactive": true
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "78",
  
                  "inactive": true,
  
                  "id": 16,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "New vendor",
  
                  "note": "nv33333",
  
                  "inactive": false,
  
                  "id": 22,
  
                  "vendor_id": 2
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "dd",
  
                  "inactive": false,
  
                  "id": 25,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "s",
  
                  "inactive": false,
  
                  "id": 26,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "s",
  
                  "inactive": false,
  
                  "id": 83,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(New vendor | nv33333)",
  
              "(Vendor 7njmjhhhhhnn | dd)",
  
              "(Vendor 7njmjhhhhhnn | s)",
  
              "(test | s)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "9ac8ab89-4aa9-805c-eae6-218f88faa0df"
  
      },
  
      {
  
          "Id": 16,
  
          "subject": " Delivery - c11 -  Vendor  : (Vendor 7njmjhhhhhnn | dd),(Vendor 7njmjhhhhhnn | 3),(test | r3432),(test | eee)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 1,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-11-29T07:00:00.000Z",
  
          "end": "2022-11-29T07:30:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApC0=",
  
          "carrierName": "c11",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 14,
  
              "event_id": 16,
  
              "vendor_id": 1,
  
              "created": "2022-11-17T20:05:38.04",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-17T20:05:38.04",
  
              "notes": "dd",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
             "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "dd",
  
                  "inactive": false,
  
                  "id": 14,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "3",
  
                  "inactive": false,
  
                  "id": 48,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "r3432",
  
                  "inactive": false,
  
                  "id": 64,
  
                  "vendor_id": 3
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "eee",
  
                  "inactive": false,
  
                  "id": 81,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null,
  
              null,
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | dd)",
  
              "(Vendor 7njmjhhhhhnn | 3)",
  
              "(test | r3432)",
  
              "(test | eee)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "cb68b28f-a5f8-a270-ea07-999ba24aa3f5"
  
      },
  
      {
  
          "Id": 17,
  
          "subject": " Delivery - c11 -  Vendor  : (New vendor | d),(test | sss)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 1,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-11-29T07:30:00.000Z",
  
          "end": "2022-11-29T08:00:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApC4=",
  
          "carrierName": "c11",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 15,
  
              "event_id": 17,
  
              "vendor_id": 2,
  
              "created": "2022-11-17T21:07:47.027",
  
             "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-17T21:07:47.027",
  
              "notes": "d",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 2,
  
              "customer_id": 1,
  
              "name": "New vendor",
  
              "department": "Department",
  
              "email": "Vendor@cedricmillar.com",
  
              "cell": "90555555555",
  
              "notes": "no notes",
  
              "created": "2022-11-02T17:28:20.977",
  
              "created_by": 1,
  
              "modified": "2022-11-02T17:28:20.977",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "New vendor",
  
                  "note": "d",
  
                  "inactive": false,
  
                  "id": 15,
  
                  "vendor_id": 2
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "sss",
  
                  "inactive": false,
  
                  "id": 82,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(New vendor | d)",
  
              "(test | sss)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "ca4230bd-f0a8-8052-bb35-789b5e299fee"
  
      },
  
      {
  
          "Id": 14,
  
          "subject": " Delivery - c11 -  Vendor  : (Vendor 7njmjhhhhhnn | 77),(Vendor 7njmjhhhhhnn | f),(test | r3),(test | d)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 1,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-11-29T08:00:00.000Z",
  
          "end": "2022-11-29T06:30:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": true,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApDA=",
  
          "carrierName": "c11",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 12,
  
              "event_id": 14,
  
              "vendor_id": 1,
  
              "created": "2022-11-17T16:17:17.513",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-17T16:17:17.513",
  
              "notes": "77",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "77",
  
                  "inactive": false,
  
                  "id": 12,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "f",
  
                  "inactive": false,
  
                  "id": 46,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "r3",
  
                  "inactive": false,
  
                  "id": 62,
  
                  "vendor_id": 3
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "d",
  
                  "inactive": false,
  
                  "id": 79,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null,
  
              null,
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | 77)",
  
              "(Vendor 7njmjhhhhhnn | f)",
  
              "(test | r3)",
  
              "(test | d)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "481201bd-9899-8e2b-6836-fca4e049a4f7"
  
      },
  
      {
  
          "Id": 4,
  
          "subject": " Delivery - c22 -  Vendor  : (Vendor 7njmjhhhhhnn | r333),(test | s)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 2,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-11-30T05:00:00.000Z",
  
          "end": "2022-11-30T05:30:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApCE=",
  
          "carrierName": "c22",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 36,
  
              "event_id": 4,
  
              "vendor_id": 1,
  
              "created": "2022-11-24T14:32:15.897",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-24T14:32:15.897",
  
              "notes": "r333",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "r333",
  
                  "inactive": false,
  
                  "id": 36,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "s",
  
                  "inactive": false,
  
                  "id": 68,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | r333)",
  
              "(test | s)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "7a64afa5-1288-9ec2-697d-82a11c2aadda"
  
      },
  
      {
  
          "Id": 6,
  
          "subject": " Delivery - c11 -  Vendor  : (Vendor 7njmjhhhhhnn | r432323),(Vendor 7njmjhhhhhnn | kk),(test | 565)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 6,
  
          "door_id": 3,
  
          "carrier_id": 1,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-11-30T05:10:00.000Z",
  
          "end": "2022-11-30T05:20:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApCM=",
  
          "carrierName": "c11",
  
          "doorName": "dd",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 38,
  
              "event_id": 6,
  
              "vendor_id": 1,
  
              "created": "2022-11-24T17:48:46.653",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-24T17:48:46.657",
  
              "notes": "r432323",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " new site",
  
          "note": "t */* x",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "r432323",
  
                  "inactive": false,
  
                  "id": 38,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "r432323",
  
                  "inactive": false,
  
                  "id": 38,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "kk",
  
                  "inactive": false,
  
                  "id": 55,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "kk",
  
                  "inactive": false,
  
                  "id": 55,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "565",
  
                  "inactive": false,
  
                  "id": 70,
  
                  "vendor_id": 3
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "565",
  
                  "inactive": false,
  
                  "id": 70,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null,
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "noteText": [
  
              {
  
                  "id": 3,
  
                  "note": "t",
  
                  "source": "schedule",
  
                  "created": "2022-11-30T00:44:35.623",
  
                  "created_by": 1,
  
                  "modified": "2022-11-30T00:44:35.623",
  
                  "modified_by": 1,
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 4,
  
                  "note": "x",
  
                  "source": null,
  
                  "created": "2022-11-30T00:44:42.413",
  
                  "created_by": 1,
  
                  "modified": "2022-11-30T00:44:42.413",
  
                  "modified_by": 1,
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 3,
  
                  "note": "t",
  
                  "source": "schedule",
  
                  "created": "2022-11-30T00:44:35.623",
  
                  "created_by": 1,
  
                  "modified": "2022-11-30T00:44:35.623",
  
                  "modified_by": 1,
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 4,
  
                  "note": "x",
  
                  "source": null,
  
                  "created": "2022-11-30T00:44:42.413",
  
                  "created_by": 1,
  
                  "modified": "2022-11-30T00:44:42.413",
  
                  "modified_by": 1,
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 3,
  
                  "note": "t",
  
                  "source": "schedule",
  
                  "created": "2022-11-30T00:44:35.623",
  
                  "created_by": 1,
  
                  "modified": "2022-11-30T00:44:35.623",
  
                  "modified_by": 1,
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 4,
  
                  "note": "x",
  
                  "source": null,
  
                  "created": "2022-11-30T00:44:42.413",
  
                  "created_by": 1,
  
                  "modified": "2022-11-30T00:44:42.413",
  
                  "modified_by": 1,
  
                  "inactive": false
  
              }
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | r432323)",
  
              "(Vendor 7njmjhhhhhnn | kk)",
  
              "(test | 565)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "cbed49a4-0c69-9a3a-5b39-f1902c2a896f"
  
      },
  
      {
  
          "Id": 1,
  
          "subject": " Delivery - c11 -  Vendor  : (Vendor 7njmjhhhhhnn | t333),(Vendor 7njmjhhhhhnn | t44),(test | r442),(test | 1)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 1,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-11-30T05:30:00.000Z",
  
          "end": "2022-11-30T06:00:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApB4=",
  
          "carrierName": "c11",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 33,
  
              "event_id": 1,
  
              "vendor_id": 1,
  
              "created": "2022-11-23T17:55:08.127",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-23T17:55:08.13",
  
              "notes": "t333",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "t333",
  
                  "inactive": false,
  
                  "id": 33,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "t44",
  
                  "inactive": false,
  
                  "id": 51,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "r442",
  
                  "inactive": false,
  
                  "id": 65,
  
                  "vendor_id": 3
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "1",
  
                  "inactive": false,
  
                  "id": 71,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null,
  
              null,
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | t333)",
  
              "(Vendor 7njmjhhhhhnn | t44)",
  
              "(test | r442)",
  
              "(test | 1)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "6971c0ae-d658-9b1b-18ca-eeb679bbada1"
  
      },
  
      {
  
          "Id": 5,
  
          "subject": " Delivery - c22 -  Vendor  : (Vendor 7njmjhhhhhnn | sdfds),(Vendor 7njmjhhhhhnn | test),(test | r432)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 2,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-11-30T06:00:00.000Z",
  
          "end": "2022-11-30T06:30:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApCI=",
  
          "carrierName": "c22",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 37,
  
              "event_id": 5,
  
              "vendor_id": 1,
  
              "created": "2022-11-24T14:47:49.067",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-24T14:47:49.067",
  
              "notes": "sdfds",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "sdfds",
  
                  "inactive": false,
  
                  "id": 37,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "test",
  
                  "inactive": false,
  
                  "id": 54,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "r432",
  
                  "inactive": false,
  
                  "id": 69,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null,
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | sdfds)",
  
              "(Vendor 7njmjhhhhhnn | test)",
  
              "(test | r432)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "b871ecb9-4789-8032-c9aa-8789337aa6f3"
  
      },
  
      {
  
          "Id": 2,
  
          "subject": " Delivery - c22 -  Vendor  : (Vendor 7njmjhhhhhnn | 111),(Vendor 7njmjhhhhhnn | test),(test | t55),(test | r3)  Freight Profile Count  : 10 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 2,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-11-30T06:30:00.000Z",
  
          "end": "2022-11-30T07:00:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApB8=",
  
          "carrierName": "c22",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 34,
  
              "event_id": 2,
  
              "vendor_id": 1,
  
              "created": "2022-11-23T19:46:44.61",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-23T19:46:44.61",
  
              "notes": "111",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": {
  
              "id": 1,
  
              "freight_profile_id": 2,
  
              "event_id": 2,
  
              "unit_quantity": 10,
  
              "unit_quantity_actual": 0,
  
              "created_by": 1,
  
              "created": "2022-11-24T20:55:55.867",
  
              "modified_by": 1,
  
              "modified": "2022-11-24T20:58:03.617",
  
              "inactive": false
  
          },
  
          "fpName": {
  
              "id": 2,
  
              "name": "FP Test",
  
              "description": "1.4",
  
              "unit_quanity_minutes": 10,
  
              "created_by": 1,
  
              "created": "2022-11-23T17:59:46.827",
  
              "modified_by": 1,
  
              "modified": "2022-11-23T17:59:46.827",
  
              "inactive": false,
  
              "max_minutes_override": 10.56
  
          },
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "111",
  
                  "inactive": false,
  
                  "id": 34,
  
                 "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "test",
  
                  "inactive": false,
  
                  "id": 52,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "t55",
  
                  "inactive": false,
  
                  "id": 66,
  
                  "vendor_id": 3
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "r3",
  
                  "inactive": false,
  
                  "id": 72,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              {
  
                  "id": 1,
  
                  "freight_profile_id": 2,
  
                  "event_id": 2,
  
                  "unit_quantity": 10,
  
                  "unit_quantity_actual": 0,
  
                  "created_by": 1,
  
                  "created": "2022-11-24T20:55:55.867",
  
                  "modified_by": 1,
  
                  "modified": "2022-11-24T20:58:03.617",
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 1,
  
                  "freight_profile_id": 2,
  
                  "event_id": 2,
  
                  "unit_quantity": 10,
  
                  "unit_quantity_actual": 0,
  
                  "created_by": 1,
  
                  "created": "2022-11-24T20:55:55.867",
  
                  "modified_by": 1,
  
                  "modified": "2022-11-24T20:58:03.617",
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 1,
  
                  "freight_profile_id": 2,
  
                  "event_id": 2,
  
                  "unit_quantity": 10,
  
                  "unit_quantity_actual": 0,
  
                  "created_by": 1,
  
                  "created": "2022-11-24T20:55:55.867",
  
                  "modified_by": 1,
  
                  "modified": "2022-11-24T20:58:03.617",
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 1,
  
                  "freight_profile_id": 2,
  
                  "event_id": 2,
  
                  "unit_quantity": 10,
  
                  "unit_quantity_actual": 0,
  
                  "created_by": 1,
  
                  "created": "2022-11-24T20:55:55.867",
  
                  "modified_by": 1,
  
                  "modified": "2022-11-24T20:58:03.617",
  
                  "inactive": false
  
              }
  
          ],
  
          "noteText": [
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | 111)",
  
              "(Vendor 7njmjhhhhhnn | test)",
  
              "(test | t55)",
  
              "(test | r3)"
  
          ],
  
          "fpsum": 10,
  
          "Guid": "eae9e3ab-b099-8390-4831-28ad92cb912c"
  
      },
  
     {
  
          "Id": 7,
  
          "subject": " Delivery - c11 -  Vendor  : (Vendor 7njmjhhhhhnn | r3),(New vendor | jkj6)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 1,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-11-30T07:00:00.000Z",
  
          "end": "2022-11-30T07:30:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApCQ=",
  
          "carrierName": "c11",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 39,
  
              "event_id": 7,
  
              "vendor_id": 1,
  
              "created": "2022-11-24T18:17:37.65",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-24T18:17:37.65",
  
              "notes": "r3",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "r3",
  
                  "inactive": false,
  
                  "id": 39,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "New vendor",
  
                  "note": "jkj6",
  
                  "inactive": false,
  
                  "id": 56,
  
                  "vendor_id": 2
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | r3)",
  
              "(New vendor | jkj6)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "aad8dd8f-f06b-9b8f-4add-74a543bab2b6"
  
      },
  
      {
  
          "Id": 3,
  
          "subject": " Delivery - c22 -  Vendor  : (Vendor 7njmjhhhhhnn | 7788),(Vendor 7njmjhhhhhnn | rerwrew),(test | sd),(test | fd)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 2,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-11-30T08:30:00.000Z",
  
          "end": "2022-11-30T09:00:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApDI=",
  
          "carrierName": "c22",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 35,
  
              "event_id": 3,
  
              "vendor_id": 1,
  
              "created": "2022-11-24T14:30:53.607",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-24T14:30:53.607",
  
              "notes": "7788",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "7788",
  
                  "inactive": false,
  
                  "id": 35,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "rerwrew",
  
                  "inactive": false,
  
                  "id": 53,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "sd",
  
                  "inactive": false,
  
                  "id": 67,
  
                  "vendor_id": 3
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "fd",
  
                  "inactive": false,
  
                  "id": 73,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null,
  
              null,
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | 7788)",
  
              "(Vendor 7njmjhhhhhnn | rerwrew)",
  
              "(test | sd)",
  
              "(test | fd)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "291644b0-877a-89bd-8a91-40bf2a8b86bd"
  
      },
  
      {
  
          "Id": 8,
  
          "subject": " Delivery - c11 -  Vendor  : (Vendor 7njmjhhhhhnn | test),(Vendor 7njmjhhhhhnn | k)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 1,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-12-01T05:00:00.000Z",
  
          "end": "2022-12-01T05:30:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApCU=",
  
          "carrierName": "c11",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 40,
  
              "event_id": 8,
  
              "vendor_id": 1,
  
              "created": "2022-11-24T18:43:14.943",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-24T18:43:14.943",
  
              "notes": "test",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
             "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "test",
  
                  "inactive": false,
  
                  "id": 40,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "k",
  
                  "inactive": false,
  
                  "id": 57,
  
                  "vendor_id": 1
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | test)",
  
              "(Vendor 7njmjhhhhhnn | k)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "ab5d61bf-da4b-811c-3953-04b3738bb442"
  
      },
  
      {
  
          "Id": 19,
  
          "subject": " Delivery - c11 -  Vendor  : (Vendor 7njmjhhhhhnn | 4),(Vendor 7njmjhhhhhnn | < > / ? \\  ''' )  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 6,
  
          "door_id": 3,
  
          "carrier_id": 1,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-12-01T05:20:00.000Z",
  
          "end": "2022-12-01T05:30:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApDg=",
  
          "carrierName": "c11",
  
          "doorName": "dd",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 17,
  
              "event_id": 19,
  
              "vendor_id": 1,
  
              "created": "2022-11-21T00:37:42.547",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-21T00:37:42.55",
  
              "notes": "4",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " new site",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "4",
  
                  "inactive": false,
  
                  "id": 17,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "lk",
  
                  "inactive": true,
  
                  "id": 20,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "dedd",
  
                  "inactive": true,
  
                  "id": 21,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "New vendor",
  
                  "note": "nv3",
  
                  "inactive": true,
  
                  "id": 29,
  
                  "vendor_id": 2
  
              },
  
              {
  
                  "name": "New vendor",
  
                  "note": "zx",
  
                  "inactive": true,
  
                  "id": 49,
  
                  "vendor_id": 2
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "< > / ? \\  ''' ",
  
                  "inactive": false,
  
                  "id": 84,
  
                  "vendor_id": 1
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null,
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null,
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | 4)",
  
              "(Vendor 7njmjhhhhhnn | < > / ? \\  ''' )"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "3af9f78c-a53a-8d71-4820-a39c7238962c"
  
      },
  
      {
  
          "Id": 9,
  
          "subject": " Delivery - c22 -  Vendor  : (New vendor | sdfsf),(Vendor 7njmjhhhhhnn | lllkl),(test | s)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 2,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-12-01T05:30:00.000Z",
  
          "end": "2022-12-01T06:00:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApCY=",
  
          "carrierName": "c22",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 41,
  
              "event_id": 9,
  
              "vendor_id": 2,
  
              "created": "2022-11-24T18:45:12.753",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-24T18:45:12.753",
  
              "notes": "sdfsf",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 2,
  
              "customer_id": 1,
  
              "name": "New vendor",
  
              "department": "Department",
  
              "email": "Vendor@cedricmillar.com",
  
              "cell": "90555555555",
  
              "notes": "no notes",
  
              "created": "2022-11-02T17:28:20.977",
  
              "created_by": 1,
  
              "modified": "2022-11-02T17:28:20.977",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "New vendor",
  
                  "note": "sdfsf",
  
                  "inactive": false,
  
                  "id": 41,
  
                  "vendor_id": 2
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "lllkl",
  
                  "inactive": false,
  
                  "id": 58,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "s",
  
                  "inactive": false,
  
                  "id": 74,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null,
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(New vendor | sdfsf)",
  
              "(Vendor 7njmjhhhhhnn | lllkl)",
  
              "(test | s)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "9aaf3ca6-121a-b0c7-baf8-7c92113b9fc6"
  
      },
  
      {
  
          "Id": 20,
  
          "subject": " Delivery - c11 -  Vendor  : (Vendor 7njmjhhhhhnn | sds)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
         "parent_id": null,
  
          "following_id": null,
  
          "site_id": 6,
  
          "door_id": 3,
  
          "carrier_id": 1,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-12-01T05:50:00.000Z",
  
          "end": "2022-12-01T06:00:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApDc=",
  
          "carrierName": "c11",
  
          "doorName": "dd",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 18,
  
              "event_id": 20,
  
              "vendor_id": 1,
  
              "created": "2022-11-21T00:38:30.73",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-21T16:32:38.613",
  
              "notes": "4",
  
              "inactive": true
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " new site",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "4",
  
                  "inactive": true,
  
                  "id": 18,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "4",
  
                  "inactive": true,
  
                  "id": 23,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "t1",
  
                  "inactive": true,
  
                  "id": 50,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "11",
  
                  "inactive": true,
  
                  "id": 85,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "ewe",
  
                  "inactive": true,
  
                  "id": 86,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "sds",
  
                  "inactive": false,
  
                  "id": 87,
  
                  "vendor_id": 1
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null,
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null,
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | sds)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "b917d99e-3d08-bfb1-ebb3-6dab2f988358"
  
      },
  
      {
  
          "Id": 10,
  
          "subject": " Delivery - c11 -  Vendor  : (New vendor | new vendor only),(test | sdsd)  Freight Profile Count  : 5 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 1,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-12-01T06:00:00.000Z",
  
          "end": "2022-12-01T06:30:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApCc=",
  
          "carrierName": "c11",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 42,
  
              "event_id": 10,
  
              "vendor_id": 1,
  
              "created": "2022-11-24T18:46:17.353",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-29T17:25:14.127",
  
              "notes": "ddd",
  
              "inactive": true
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": {
  
              "id": 2,
  
              "freight_profile_id": 2,
  
              "event_id": 10,
  
              "unit_quantity": 5,
  
              "unit_quantity_actual": 0,
  
              "created_by": 1,
  
              "created": "2022-11-29T20:26:10.81",
  
              "modified_by": 1,
  
              "modified": "2022-11-29T20:26:10.81",
  
              "inactive": false
  
          },
  
          "fpName": {
  
              "id": 2,
  
              "name": "FP Test",
  
              "description": "1.4",
  
              "unit_quanity_minutes": 10,
  
              "created_by": 1,
  
              "created": "2022-11-23T17:59:46.827",
  
              "modified_by": 1,
  
              "modified": "2022-11-23T17:59:46.827",
  
              "inactive": false,
  
              "max_minutes_override": 10.56
  
          },
  
          "siteName": " test1",
  
         "note": "a */* b",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "ddd",
  
                  "inactive": true,
  
                  "id": 42,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "ddd",
  
                  "inactive": true,
  
                  "id": 42,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "New vendor",
  
                  "note": "new vendor only",
  
                  "inactive": false,
  
                  "id": 59,
  
                  "vendor_id": 2
  
              },
  
              {
  
                  "name": "New vendor",
  
                  "note": "new vendor only",
  
                  "inactive": false,
  
                  "id": 59,
  
                  "vendor_id": 2
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "sdsd",
  
                  "inactive": false,
  
                  "id": 75,
  
                  "vendor_id": 3
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "sdsd",
  
                  "inactive": false,
  
                  "id": 75,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              {
  
                  "id": 2,
  
                  "freight_profile_id": 2,
  
                  "event_id": 10,
  
                  "unit_quantity": 5,
  
                  "unit_quantity_actual": 0,
  
                  "created_by": 1,
  
                  "created": "2022-11-29T20:26:10.81",
  
                  "modified_by": 1,
  
                  "modified": "2022-11-29T20:26:10.81",
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 2,
  
                  "freight_profile_id": 2,
  
                  "event_id": 10,
  
                  "unit_quantity": 5,
  
                  "unit_quantity_actual": 0,
  
                  "created_by": 1,
  
                  "created": "2022-11-29T20:26:10.81",
  
                 "modified_by": 1,
  
                  "modified": "2022-11-29T20:26:10.81",
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 2,
  
                  "freight_profile_id": 2,
  
                  "event_id": 10,
  
                  "unit_quantity": 5,
  
                  "unit_quantity_actual": 0,
  
                  "created_by": 1,
  
                  "created": "2022-11-29T20:26:10.81",
  
                  "modified_by": 1,
  
                  "modified": "2022-11-29T20:26:10.81",
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 2,
  
                  "freight_profile_id": 2,
  
                  "event_id": 10,
  
                  "unit_quantity": 5,
  
                  "unit_quantity_actual": 0,
  
                  "created_by": 1,
  
                  "created": "2022-11-29T20:26:10.81",
  
                  "modified_by": 1,
  
                  "modified": "2022-11-29T20:26:10.81",
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 2,
  
                  "freight_profile_id": 2,
  
                  "event_id": 10,
  
                  "unit_quantity": 5,
  
                  "unit_quantity_actual": 0,
  
                  "created_by": 1,
  
                  "created": "2022-11-29T20:26:10.81",
  
                  "modified_by": 1,
  
                  "modified": "2022-11-29T20:26:10.81",
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 2,
  
                  "freight_profile_id": 2,
  
                  "event_id": 10,
  
                  "unit_quantity": 5,
  
                  "unit_quantity_actual": 0,
  
                  "created_by": 1,
  
                  "created": "2022-11-29T20:26:10.81",
  
                  "modified_by": 1,
  
                  "modified": "2022-11-29T20:26:10.81",
  
                  "inactive": false
  
              }
  
          ],
  
          "noteText": [
  
              {
  
                  "id": 1,
  
                  "note": "a",
  
                  "source": "schedule",
  
                  "created": "2022-11-30T00:08:31.977",
  
                  "created_by": 1,
  
                  "modified": "2022-11-30T00:08:31.977",
  
                  "modified_by": 1,
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 2,
  
                  "note": "b",
  
                  "source": null,
  
                  "created": "2022-11-30T00:09:43.44",
  
                  "created_by": 1,
  
                  "modified": "2022-11-30T00:09:43.44",
  
                  "modified_by": 1,
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 1,
  
                  "note": "a",
  
                  "source": "schedule",
  
                  "created": "2022-11-30T00:08:31.977",
  
                  "created_by": 1,
  
                  "modified": "2022-11-30T00:08:31.977",
  
                  "modified_by": 1,
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 2,
  
                  "note": "b",
  
                  "source": null,
  
                  "created": "2022-11-30T00:09:43.44",
  
                  "created_by": 1,
  
                  "modified": "2022-11-30T00:09:43.44",
  
                  "modified_by": 1,
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 1,
  
                  "note": "a",
  
                  "source": "schedule",
  
                  "created": "2022-11-30T00:08:31.977",
  
                  "created_by": 1,
  
                  "modified": "2022-11-30T00:08:31.977",
  
                  "modified_by": 1,
  
                  "inactive": false
  
              },
  
              {
  
                  "id": 2,
  
                  "note": "b",
  
                  "source": null,
  
                  "created": "2022-11-30T00:09:43.44",
  
                  "created_by": 1,
  
                  "modified": "2022-11-30T00:09:43.44",
  
                  "modified_by": 1,
  
                  "inactive": false
  
              }
  
          ],
  
          "vendorName": [
  
              "(New vendor | new vendor only)",
  
              "(test | sdsd)"
  
          ],
  
          "fpsum": 5,
  
          "Guid": "995ebb92-266b-94f6-c99b-2f9c91ea874d"
  
      },
  
      {
  
          "Id": 11,
  
          "subject": " Delivery - c11 -  Vendor  : (Vendor 7njmjhhhhhnn | R123123),(New vendor | R33333),(Vendor 7njmjhhhhhnn | t32323),(Vendor 7njmjhhhhhnn | fdsfdsf),(test | rr)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 1,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-12-01T06:30:00.000Z",
  
          "end": "2022-12-01T07:00:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApCg=",
  
          "carrierName": "c11",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 1,
  
              "event_id": 11,
  
              "vendor_id": 1,
  
              "created": "2022-11-11T00:00:00",
  
              "created_by": 0,
  
              "modified_by": 0,
  
              "modified": "2022-11-11T00:00:00",
  
              "notes": "R123123",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "R123123",
  
                  "inactive": false,
  
                  "id": 1,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "New vendor",
  
                  "note": "R33333",
  
                  "inactive": false,
  
                  "id": 2,
  
                  "vendor_id": 2
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "t32323",
  
                  "inactive": false,
  
                  "id": 43,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "fdsfdsf",
  
                  "inactive": false,
  
                  "id": 60,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "rr",
  
                  "inactive": false,
  
                  "id": 76,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | R123123)",
  
              "(New vendor | R33333)",
  
              "(Vendor 7njmjhhhhhnn | t32323)",
  
              "(Vendor 7njmjhhhhhnn | fdsfdsf)",
  
              "(test | rr)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "68070089-e65a-b3fd-b8d1-64b84b599661"
  
      },
  
      {
  
          "Id": 12,
  
          "subject": " Delivery - c11 -  Vendor  : (Vendor 7njmjhhhhhnn | Note....................),(Vendor 7njmjhhhhhnn | 777),(Vendor 7njmjhhhhhnn | test),(test | s)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 1,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
          "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-12-01T07:00:00.000Z",
  
          "end": "2022-12-01T09:00:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": true,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApDE=",
  
          "carrierName": "c11",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 3,
  
              "event_id": 12,
  
              "vendor_id": 1,
  
              "created": "2022-11-11T00:00:00",
  
              "created_by": 0,
  
              "modified_by": 1,
  
              "modified": "2022-11-17T05:07:55.817",
  
              "notes": "Note....................",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "Note....................",
  
                  "inactive": false,
  
                  "id": 3,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "New vendor",
  
                  "note": "new vendor 333",
  
                  "inactive": true,
  
                  "id": 4,
  
                  "vendor_id": 2
  
              },
  
              {
  
                  "name": "New vendor",
  
                  "note": "22222",
  
                  "inactive": true,
  
                  "id": 5,
  
                  "vendor_id": 2
  
              },
  
              {
  
                  "name": "New vendor",
  
                  "note": "33333",
  
                  "inactive": true,
  
                  "id": 6,
  
                  "vendor_id": 2
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "new vendor 222",
  
                  "inactive": true,
  
                  "id": 7,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "New vendor",
  
                  "note": "new vendor 333",
  
                  "inactive": true,
  
                  "id": 8,
  
                  "vendor_id": 2
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "vn xxxxxxxxx",
  
                  "inactive": true,
  
                  "id": 9,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "777",
  
                  "inactive": false,
  
                  "id": 10,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "test",
  
                  "inactive": false,
  
                  "id": 44,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "s",
  
                  "inactive": false,
  
                  "id": 77,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null,
  
              null,
  
              null,
  
              null,
  
              null,
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null,
  
              null,
  
              null,
  
              null,
  
              null,
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | Note....................)",
  
              "(Vendor 7njmjhhhhhnn | 777)",
  
              "(Vendor 7njmjhhhhhnn | test)",
  
              "(test | s)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "2a2140a7-4fba-b07f-0980-74a33cd98b47"
  
      },
  
      {
  
          "Id": 13,
  
          "subject": " Delivery - c33 -  Vendor  : (Vendor 7njmjhhhhhnn | gggg),(Vendor 7njmjhhhhhnn | 1),(test | r12321),(test | sd)  Freight Profile Count  : 0 ",
  
          "is_all_day": false,
  
          "is_block": false,
  
          "reoccurence_rule": null,
  
          "reoccurence_exception": null,
  
          "parent_id": null,
  
          "following_id": null,
  
          "site_id": 5,
  
          "door_id": 2,
  
          "carrier_id": 3,
  
          "carrier_accepted_date": null,
  
          "carrier_instructions": "",
  
          "carrier_confirmation_number": null,
  
         "customer_confirmation_number": "",
  
          "event_type_id": 2,
  
          "event_status_id": 5,
  
          "start": "2022-12-02T05:00:00.000Z",
  
          "end": "2022-12-02T05:30:00.000Z",
  
          "start_actual": "1970-01-01T00:00:00.000Z",
  
          "end_actual": "1970-01-01T00:00:00.000Z",
  
          "override_freight_profile": false,
  
          "seal_num": "",
  
          "inspection_status_id": null,
  
          "cancelled_id": null,
  
          "cancelled_date": null,
  
          "cancelled_by": null,
  
          "temperature": null,
  
          "temperature_actual": null,
  
          "trailer_number": "",
  
          "quantity": null,
  
          "quantity_actual": null,
  
          "deleted": false,
  
          "version_stamp": "AAAAAAAApCo=",
  
          "carrierName": "c33",
  
          "doorName": "d1",
  
          "doorColor": "#008000ff",
  
          "vendorEventList": {
  
              "id": 11,
  
              "event_id": 13,
  
              "vendor_id": 1,
  
              "created": "2022-11-17T16:14:43.2",
  
              "created_by": 1,
  
              "modified_by": 1,
  
              "modified": "2022-11-17T16:14:43.2",
  
              "notes": "gggg",
  
              "inactive": false
  
          },
  
          "vendorList": {
  
              "id": 1,
  
              "customer_id": 1,
  
              "name": "Vendor 7njmjhhhhhnn",
  
              "department": "Vendor Department",
  
              "email": "vendor@cedricmillar.com",
  
              "cell": "905 777 7777",
  
              "notes": "Note....................",
  
              "created": "2022-11-01T00:00:00",
  
              "created_by": 1,
  
              "modified": "2022-12-02T00:24:06.267",
  
              "modified_by": 1,
  
              "inactive": false
  
          },
  
          "fpList": null,
  
          "fpName": null,
  
          "siteName": " test1",
  
          "note": "",
  
          "vendorText": [
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "gggg",
  
                  "inactive": false,
  
                  "id": 11,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "Vendor 7njmjhhhhhnn",
  
                  "note": "1",
  
                  "inactive": false,
  
                  "id": 45,
  
                  "vendor_id": 1
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "r12321",
  
                  "inactive": false,
  
                  "id": 61,
  
                  "vendor_id": 3
  
              },
  
              {
  
                  "name": "test",
  
                  "note": "sd",
  
                  "inactive": false,
  
                  "id": 78,
  
                  "vendor_id": 3
  
              }
  
          ],
  
          "fpText": [
  
              "",
  
              null,
  
              null,
  
              null
  
          ],
  
          "noteText": [
  
              null,
  
              null,
  
              null,
  
              null
  
          ],
  
          "vendorName": [
  
              "(Vendor 7njmjhhhhhnn | gggg)",
  
              "(Vendor 7njmjhhhhhnn | 1)",
  
              "(test | r12321)",
  
              "(test | sd)"
  
          ],
  
          "fpsum": 0,
  
          "Guid": "18677fa9-07ba-8a65-ba62-7b8ac8888215"
  
      }
  
  ];
    let checkboxObj;
    let flag = true;
    function dataBound() {
        if (flag) {
            gridInstance.toolbarModule.toolbar.hideItem(2, true);
            flag = false;
        }
    }
    function exportQueryCellInfo(args) {
        if (args.column.headerText === 'Employee Image') {
            if (args.name === "excelQueryCellInfo") {
                args.image = { height: 75, base64: args.data["EmployeeImage"], width: 75 };
            }
            else {
                args.image = { base64: args.data["EmployeeImage"] };
            }
        }
        if (args.column.headerText === 'Email ID') {
            args.hyperLink = {
                target: 'mailto:' + args.data["EmailID"],
                displayText: args.data["EmailID"]
            };
        }
    }
    function onChanged(args) {
        let fields = ["Employee Image", "Email ID"];
        if (args.checked) {
            gridInstance.showColumns(fields, "headerText");
            gridInstance.toolbarModule.toolbar.hideItem(2, true);
        }
        else {
            gridInstance.hideColumns(fields, "headerText");
            gridInstance.toolbarModule.toolbar.hideItem(2, false);
        }
    }
    function gridImageTemplate(props) {
        var src = 'src/grid/images/' + props.EmployeeID + '.png';
        return (<div className='image'>
      <img src={src} alt={props.EmployeeID}/>
    </div>);
    }
    function gridUrlTemplate(props) {
        var src = 'mailto:${EmailID}' + props.EmailID;
        return (<div className='url'>
      <a href={src}>{props.EmailID}</a>
    </div>);
    }
    const template1 = gridImageTemplate;
    const template2 = gridUrlTemplate;
    function toolbarClick(args) {
        switch (args.item.text) {
            case 'PDF Export':
                gridInstance.pdfExport();
                break;
            case 'Excel Export':
                gridInstance.excelExport();
                break;
            case 'CSV Export':
                gridInstance.csvExport();
                break;
        }
    }
    return (<div className='control-pane'>
      <div className='col-lg-9 control-section'>
        <GridComponent dataSource={data} ref={grid => gridInstance = grid} toolbar={toolbarOptions} allowExcelExport={true} excelQueryCellInfo={exportQueryCellInfo.bind(this)} toolbarClick={toolbarClick.bind(this)}  height='350'>
          <ColumnsDirective>
          <ColumnDirective field='Id' headerText='Id' visible={false}></ColumnDirective>

<ColumnDirective
    field='siteName'
    //valueAccessor={valueTemplateSite}
    width={"120"}
/>
<ColumnDirective
    field='subject'
    //  width={"200"}
/>
<ColumnDirective field='fpsum' width={"170"} />
<ColumnDirective
                                    field='vendorName'
                                  
                                    //valueAccessor={valueTemplateVendor}
                                    //  width={"200"}
                                />
          </ColumnsDirective>
          <Inject services={[Toolbar, ExcelExport, PdfExport, Group]}/>
        </GridComponent>
      </div>
      <div className='col-lg-3 property-section'>
        <PropertyPane title='Properties'>
          <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
            <tr>
              <td style={{ width: '70%' }}>
                <div>Export template column </div>
              </td>
              <td style={{ width: '30%', padding: '10px 10px 10px 0px' }}>
                <CheckBoxComponent ref={(scope) => { checkboxObj = scope; }} checked={true} change={onChanged.bind(this)}></CheckBoxComponent>
              </td>
            </tr>
          </table>
        </PropertyPane>
      </div>
    </div>);
}
export default Exporting;

const root = createRoot(document.getElementById('sample'));
root.render(<Exporting />);