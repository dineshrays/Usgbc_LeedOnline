$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/GitProjects/Usgbc_LeedOnline/Usgbc_LeedOnline/Include/features/Usgbc_LeedPrjtReg.feature");
formatter.feature({
  "name": "USGBC Leed Online Project Registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To verify the Leed online Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User has to navigate to LEED Online login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User has to enter username \u003cusername\u003e and password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User has to check accept checkbox",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on login button and navigate to home page",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to project Details Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on Create new button to navigate to in Leeds online homepage",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "jaypeejay@hotmail.com",
        "initpass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the Leed online Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User has to navigate to LEED Online login page",
  "keyword": "Given "
});
formatter.match({
  "location": "projectdetails.user_has_to_navigate_to_LEED_Online_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter username jaypeejay@hotmail.com and password initpass",
  "keyword": "And "
});
formatter.match({
  "location": "projectdetails.User_has_to_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to check accept checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "projectdetails.User_has_to_check_accept_checkbox()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to check object \u0027Object Repository/Project_Registration/Page_LEED Online/span_End User License Agreemen\u0027 (Root cause: org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d72.0.3626.119)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:07:36.161Z\u0027\nSystem info: host: \u0027G10PROLT025\u0027, ip: \u0027192.168.1.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.selenium.driver.CChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\WINDOWS\\TEMP\\scoped_dir1...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60420}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 72.0.3626.119, webStorageEnabled: true}\nSession ID: 526188d1c3078dee4a49928bb671f70a)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.CheckKeyword.check(CheckKeyword.groovy:88)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.CheckKeyword.execute(CheckKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.check(WebUiBuiltInKeywords.groovy:1039)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$check$4.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat projectdetails.User_has_to_check_accept_checkbox(Usgbc_LeedVerifyStepDef.groovy:73)\r\n\tat ✽.User has to check accept checkbox(F:/GitProjects/Usgbc_LeedOnline/Usgbc_LeedOnline/Include/features/Usgbc_LeedPrjtReg.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on login button and navigate to home page",
  "keyword": "When "
});
formatter.match({
  "location": "projectdetails.User_clicks_on_login_button_and_navigate_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should navigate to project Details Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_should_navigate_to_Project_Details_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Create new button to navigate to in Leeds online homepage",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_clicks_on_Create_new_button_to_navigate_to_in_Leeds_online_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Creating Project for Leeds Online",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User should be in Leeds online homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "User has to fill all the entries in project details page such as Name \u003cName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User should select Group Certification project,Rating Systems,Unit Type",
  "keyword": "And "
});
formatter.step({
  "name": "User should select start date",
  "keyword": "And "
});
formatter.step({
  "name": "User should select end date",
  "keyword": "And "
});
formatter.step({
  "name": "User should click and select Anticipated type",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter Gross floor area \u003cGross floor area\u003e,Owner \u003cOwner\u003e,Owners Representative \u003cOwners Representative\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User has to select OwnerType,Owner Country",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter the email address \u003cemail address\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User has to select the Project Options",
  "keyword": "And "
});
formatter.step({
  "name": "User has to select the Project Options of previously certified",
  "keyword": "And "
});
formatter.step({
  "name": "User can enter the ProjectID \u003cProjectID\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User enters address1 \u003caddress1\u003e and address2 \u003caddress2\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User has to enter city \u003ccity\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User has to select Country and state",
  "keyword": "And "
});
formatter.step({
  "name": "User has to enter postal code \u003cpostal code\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User has to enter geo location of latitude \u003clatitude\u003e and longitude \u003clongitude\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Continue Button",
  "keyword": "When "
});
formatter.step({
  "name": "Successfully entered the details page and user should navigate to Agreement page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Name",
        "Gross floor area",
        "Owner",
        "Owners Representative",
        "email address",
        "ProjectID",
        "address1",
        "address2",
        "city",
        "postal code",
        "latitude",
        "longitude"
      ]
    },
    {
      "cells": [
        "BDDAuto001",
        "1000",
        "J \u0026 S Real Assets, LLC",
        "Jancy Rani",
        "gokulthiru22@gmail.com",
        "1000159688",
        "9338 Carpenter St.",
        "9338 Carpenter St.",
        "Waukesha",
        "46526",
        "41.582272",
        "-85.834438"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Creating Project for Leeds Online",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User should be in Leeds online homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_should_be_in_Leeds_online_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to fill all the entries in project details page such as Name BDDAuto001",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_has_to_fill_all_the_entries_in_project_details_page_such_as_Name(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to set text \u0027BDDAuto001\u0027 of object \u0027Object Repository/Project_Registration/Detail/Page_LEED Online/input_Name_name\u0027 (Root cause: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/Project_Registration/Detail/Page_LEED Online/input_Name_name\u0027 located by \u0027By.xpath: //input[@name\u003d\u0027name\u0027]\u0027 not found)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.setText(SetTextKeyword.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.execute(SetTextKeyword.groovy:37)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.setText(WebUiBuiltInKeywords.groovy:950)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$setText$2.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat leedOnline.Usgbc_LeedPrjtRegStepDef.User_has_to_fill_all_the_entries_in_project_details_page_such_as_Name(Usgbc_LeedPrjtRegStepDef.groovy:76)\r\n\tat ✽.User has to fill all the entries in project details page such as Name BDDAuto001(F:/GitProjects/Usgbc_LeedOnline/Usgbc_LeedOnline/Include/features/Usgbc_LeedPrjtReg.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User should select Group Certification project,Rating Systems,Unit Type",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_should_select_Group_Certification_project_Rating_Systems_Unit_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should select start date",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_should_select_start_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should select end date",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_should_select_end_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click and select Anticipated type",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_should_click_and_select_Anticipated_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter Gross floor area 1000,Owner J \u0026 S Real Assets, LLC,Owners Representative Jancy Rani",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_should_enter_Gross_floor_area_Owner_Owners_Representative(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to select OwnerType,Owner Country",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_has_to_select_OwnerType_Owner_Country()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter the email address gokulthiru22@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_should_enter_the_email_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to select the Project Options",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_has_to_select_the_Project_Options()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to select the Project Options of previously certified",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_has_to_select_the_Project_Options_of_previously_certified()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can enter the ProjectID 1000159688",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_can_enter_the_ProjectID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters address1 9338 Carpenter St. and address2 9338 Carpenter St.",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_enters_address1_and_address2(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter city Waukesha",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_has_to_enter_city(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to select Country and state",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_has_to_select_Country_and_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter postal code 46526",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_has_to_enter_postal_code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter geo location of latitude 41.582272 and longitude -85.834438",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_has_to_enter_geo_location_of_latitude_and_longitude(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Continue Button",
  "keyword": "When "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_clicks_on_Continue_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Successfully entered the details page and user should navigate to Agreement page",
  "keyword": "Then "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.Successfully_entered_the_details_page_and_user_should_navigate_to_Agreement_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To Verify LEED certification agreement",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User has to find LEED certification agreement",
  "keyword": "Given "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_has_to_find_LEED_certification_agreement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should find all the 29 list of points",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_should_find_all_the_29_list_of_points()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to send keys \u0027\u0027 to object \u0027Object Repository/Project_Registration/agrrement verifi/Page_LEED Online/iframe\u0027 (Root cause: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/Project_Registration/agrrement verifi/Page_LEED Online/iframe\u0027 located by \u0027By.xpath: //div[@id\u003d\u0027project-registration\u0027]/div/div[2]/iframe\u0027 not found)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SendKeysKeyword.sendKeys(SendKeysKeyword.groovy:60)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SendKeysKeyword.execute(SendKeysKeyword.groovy:38)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.sendKeys(WebUiBuiltInKeywords.groovy:834)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$sendKeys$5.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat leedOnline.Usgbc_LeedPrjtRegStepDef.User_should_find_all_the_29_list_of_points(Usgbc_LeedPrjtRegStepDef.groovy:182)\r\n\tat ✽.User should find all the 29 list of points(F:/GitProjects/Usgbc_LeedOnline/Usgbc_LeedOnline/Include/features/Usgbc_LeedPrjtReg.feature:66)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User wants to agree then user should click on I AGREE button",
  "keyword": "When "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_wants_to_agree_then_user_should_click_on_I_AGREE_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User successfully registered project and user should navigate to payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_successfully_registered_project_and_user_should_navigate_to_payment_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "To verify USGBC LEED online payment for card",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User has to see Project details",
  "keyword": "Given "
});
formatter.step({
  "name": "User has to find payment type",
  "keyword": "And "
});
formatter.step({
  "name": "User can select credit card and card type",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter Name on card \u003cName on card\u003e,Card number \u003cCard number\u003e,CVV \u003cCVV\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User should select Expiration Month \u003cMonth\u003e and Year \u003cYear\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter Bill to party name \u003cBill to party name\u003e,Bill to party Email \u003c Bill to party Email\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter Address1 \u003cAddress1\u003e,Address2 \u003cAddress2\u003e,City \u003cCity\u003e,Country \u003cCountry\u003e,State \u003cState\u003e,Postal code \u003cPostal code\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User should click on SUBMIT PAYMENT",
  "keyword": "When "
});
formatter.step({
  "name": "User successfully entered into Receipt page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Project details",
        "payment type",
        "card type",
        "Name on card",
        "Card number",
        "CVV",
        "Month",
        "Year",
        "Bill-to-party name",
        "Bill-to-party Email",
        "Address1",
        "Address2",
        "City",
        "Country",
        "State",
        "Postalcode",
        "code"
      ]
    },
    {
      "cells": [
        "private",
        "credit card",
        "mastercard",
        "gokul t",
        "4111111111111111",
        "999",
        "02",
        "2023",
        "John James p",
        "gokulthiru22@gmail.com",
        "9338 Carpenter St.",
        "9338 Carpenter St.",
        "Waukesha",
        "United States",
        "Indiana",
        "46526",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify USGBC LEED online payment for card",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User has to see Project details",
  "keyword": "Given "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_has_to_see_Project_details()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/Project_Registration/payment page/Page_LEED Online/input_Payment type_payment_typ\u0027 is visible (Root cause: com.kms.katalon.core.exception.StepFailedException: Web element with id: \u0027Object Repository/Project_Registration/payment page/Page_LEED Online/input_Payment type_payment_typ\u0027 located by \u0027By.xpath: //input[@id\u003d\u0027rbl_card\u0027]\u0027 not found)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:97)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementVisible(WebUiBuiltInKeywords.groovy:372)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementVisible$6.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat leedOnline.Usgbc_LeedPrjtRegStepDef.User_has_to_see_Project_details(Usgbc_LeedPrjtRegStepDef.groovy:221)\r\n\tat ✽.User has to see Project details(F:/GitProjects/Usgbc_LeedOnline/Usgbc_LeedOnline/Include/features/Usgbc_LeedPrjtReg.feature:80)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User has to find payment type",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_has_to_find_payment_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can select credit card and card type",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_can_select_credit_card_and_card_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter Name on card gokul t,Card number 4111111111111111,CVV 999",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_should_enter_Name_on_card_Card_number_CVV(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should select Expiration Month 02 and Year 2023",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_should_select_Expiration_Month_and_Year(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter Bill to party name \u003cBill to party name\u003e,Bill to party Email \u003c Bill to party Email\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_should_enter_Bill_to_party_name_Bill_to_party_Email(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter Address1 9338 Carpenter St.,Address2 9338 Carpenter St.,City Waukesha,Country United States,State Indiana,Postal code \u003cPostal code\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_should_enter_Address1_Address2_City_Country_State_Postal_code(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click on SUBMIT PAYMENT",
  "keyword": "When "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_should_click_on_SUBMIT_PAYMENT()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User successfully entered into Receipt page",
  "keyword": "Then "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_successfully_entered_into_Receipt_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To verify the Receipt",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User has to find Order Summary",
  "keyword": "Given "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_has_to_find_Order_Summary()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/Project_Registration/Receipt/Page_LEED Online/td_v4.1 Interiors BP02\u0027 is visible (Root cause: com.kms.katalon.core.exception.StepFailedException: Web element with id: \u0027Object Repository/Project_Registration/Receipt/Page_LEED Online/td_v4.1 Interiors BP02\u0027 located by \u0027By.xpath: //div[@id\u003d\u0027body\u0027]/div/div/div/table/tbody/tr[3]/td\u0027 not found)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:97)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementVisible(WebUiBuiltInKeywords.groovy:372)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementVisible$6.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat leedOnline.Usgbc_LeedPrjtRegStepDef.User_has_to_find_Order_Summary(Usgbc_LeedPrjtRegStepDef.groovy:328)\r\n\tat ✽.User has to find Order Summary(F:/GitProjects/Usgbc_LeedOnline/Usgbc_LeedOnline/Include/features/Usgbc_LeedPrjtReg.feature:131)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User has to click on Print and DONE buttons",
  "keyword": "When "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_has_to_click_on_Print_and_DONE_buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User successfully created project",
  "keyword": "Then "
});
formatter.match({
  "location": "Usgbc_LeedPrjtRegStepDef.User_successfully_created_project()"
});
formatter.result({
  "status": "skipped"
});
});