sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.ibmTimeline.controller.View1", {
		onInit: function() {
			var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",
				"December"
			];

			var myTimeline = this.byId("idTimeline");

			// myTimeline.destroyContent();
			

			var GSPaidDate = "2015-02-02T00:00:00";
			var AppointmentDate = "2016-04-04T00:00:00";
			var RejectionReceiptDate = "2017-03-03T02:00:00";
			var AppointmentRaisedDate = "2014-01-01T00:00:00";

			//
			if (GSPaidDate != "") {
				//find month
				var month = parseInt(GSPaidDate.substring(5, 7)) - 1;
				var dayYear = " " + GSPaidDate.substring(8, 10) + " " + GSPaidDate.substring(0, 4);

				var item1 = new sap.suite.ui.commons.TimelineItem({
					"id": "GSPaidDate",
					"dateTime": GSPaidDate,
					"title": months[month] + dayYear,
					 //"icon": "/images/GSPaidDate.png",
					 "icon": "sap-icon://pharmacy",
					"position": sap.suite.ui.commons.TimelineItemPosition.Bottom
				});

				myTimeline.addContent(item1);
			}

			if (AppointmentDate != "") {
				var month = parseInt(AppointmentDate.substring(5, 7)) - 1;
				var dayYear = " " + AppointmentDate.substring(8, 10) + " " + AppointmentDate.substring(0, 4);

				var item1 = new sap.suite.ui.commons.TimelineItem({
					"id": "AppointmentDate",
					"dateTime": AppointmentDate,
					"title": months[month] + dayYear,
					 "icon": "sap-icon://pharmacy",
					"position": sap.suite.ui.commons.TimelineItemPosition.Top
				});

				myTimeline.addContent(item1);
			}
			if (RejectionReceiptDate != "") {
				var month = parseInt(RejectionReceiptDate.substring(5, 7)) - 1;
				var dayYear = " " + RejectionReceiptDate.substring(8, 10) + " " + RejectionReceiptDate.substring(0, 4);

				var item1 = new sap.suite.ui.commons.TimelineItem({
					"id": "RejectionReceiptDate",
					"dateTime": RejectionReceiptDate,
					"title": months[month] + dayYear,
					 "icon": "sap-icon://pharmacy",
					"position": sap.suite.ui.commons.TimelineItemPosition.Bottom
				});

				myTimeline.addContent(item1);
			}
			if (AppointmentRaisedDate != "") {
				var month = parseInt(AppointmentRaisedDate.substring(5, 7)) - 1;
				var dayYear = " " + AppointmentRaisedDate.substring(8, 10) + " " + AppointmentRaisedDate.substring(0, 4);
				var item1 = new sap.suite.ui.commons.TimelineItem({
					"id": "AppointmentRaisedDate",
					"dateTime": AppointmentRaisedDate,
					"title": months[month] + dayYear,
					 "icon": "sap-icon://pharmacy",
					"position": sap.suite.ui.commons.TimelineItemPosition.Top
				});

				myTimeline.addContent(item1);
			}
			
				
			//myTimeline.setAxisOrientation(sap.suite.ui.commons.TimelineAxisOrientation.Horizontal);
			myTimeline.setEnableDoubleSided(true);
		}

	});
});