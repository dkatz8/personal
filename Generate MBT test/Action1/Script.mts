Browser("Login -").Page("Login -").Sync
Browser("M4050 draft - Core Software").Navigate "https://integration-branch-prod.almoctane.com/ui/entity-navigation?p=21003/1002&entityType=model_item&id=4050"
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com" @@ script infofile_;_ZIP::ssf24.xml_;_
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Login -").Page("Login - MyAccount").WebEdit("password").SetSecure "676ac18a2063604b2fd15195399420fc6a9fba33b99ffc68eddb6eec3ee96477b9d4" @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Login -").Page("Login - MyAccount").WebButton("SIGN IN").Click
wait 3
Browser("M4050 draft - Core Software").Page("M4050 draft - Core Software").WebTabStrip("Details Relations Model").Select "Paths" @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("M4050 draft - Core Software").Page("M4050 draft - Core Software").WebElement("1 Login, 2 RestAPITestCreateOr_2").Click @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("M4050 draft - Core Software").Page("M4050 draft - Core Software").WebButton("Generate tests from paths").Click @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("M4050 draft - Core Software").Page("M4050 draft - Core Software").WebButton("Generate").Click @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("M4050 draft - Core Software").Page("M4050 draft - Core Software").WebButton("Manually path selection.").Click @@ script infofile_;_ZIP::ssf40.xml_;_
Browser("M4050 draft - Core Software").Page("M4050 draft - Core Software").WebButton("Generate tests from paths").Click @@ script infofile_;_ZIP::ssf41.xml_;_
Browser("M4050 draft - Core Software").Page("M4050 draft - Core Software").WebButton("Generate").Click
If rowser("M4050 draft - Core Software").Page("M4050 draft - Core Software").WebElement("Model Based Test").Exist(15) Then
 	Reporter.ReportEvent micPass, "Generate  successful","Generate test  successful"
 	Else
 	Reporter.ReportEvent micFail, "Generate fail","Generate test failed"
 End If

 @@ script infofile_;_ZIP::ssf39.xml_;_
 @@ hightlight id_;_466196_;_script infofile_;_ZIP::ssf26.xml_;_
