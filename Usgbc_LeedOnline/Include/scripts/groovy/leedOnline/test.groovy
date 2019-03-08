package leedOnline
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords

import internal.GlobalVariable

import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When


class test {
/*
	@Given("User has to navigate to login page")
	public void user_has_to_navigate_to_login_page(){
		WebUI.openBrowser("")
		WebUI.maximizeWindow()
		//WebUI.setViewPortSize(1044,788)
		WebUI.navigateToUrl("URL")
		//WebUI.executeJavaScript("document.body.style.zoom='75%'", null)
	}

	@When("User has to enter username (.*) and password (.*)")
	public void User_has_to_enter_username_and_password(String username,String password){
		WebUI.delay(2)
		WebUI.setText(findTestObject('Object Repository/Project_/username'), username)
		WebUI.setText(findTestObject('Object Repository/Project_/password'), password)
	}

	@When("User has to check accept checkbox")
	public void User_has_to_check_accept_checkbox(){
		WebUI.delay(3)
		WebUI.scrollToElement(findTestObject('Object Repository/Project_Registration/ License Agreemen'),30)

		WebUI.check(findTestObject('Object Repository/Project_/License Agreemen'))
	}

	@When("User clicks on login button and navigate to home page")
	public void User_clicks_on_login_button_and_navigate_to_home_page(){
		WebUI.delay(2)
		WebUI.click(findTestObject('Object Repository/Project_/button_Log In'))
	}
	*/
}