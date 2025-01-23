Browser("Browser").Page("Page").Sync
Browser("Browser").Navigate "https://integration-branch-prod.almoctane.com/ui/?admin&p=21003/1002#/settings/workspace/users"
Browser("Login -").Page("Login -").WebElement("Back > Sign in with corporate").Click @@ script infofile_;_ZIP::ssf71.xml_;_
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com" @@ script infofile_;_ZIP::ssf72.xml_;_
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Login -").Page("Login -").WebEdit("password").SetSecure "6790f46bc866c54a09d3f82343aa44e3aa071a6085d7d0269e39164183603155154e" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Login -").Page("Login -").WebButton("SIGN IN").Click
RunAction "Action1", oneIteration @@ script infofile_;_ZIP::ssf158.xml_;_
