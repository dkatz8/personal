Browser("Login -_2").Page("Login -").Sync
Browser("Login -_2").Navigate "https://qa3.almoctane.com/ui/?admin&p=1001/1002#/settings/workspace/devops/executors" @@ hightlight id_;_2561540_;_script infofile_;_ZIP::ssf19.xml_;_

Browser("Login -_2").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com" @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("Login -_2").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("Login -_2").Page("Login -").WebEdit("password").SetSecure "677f8e55919528959ecbc9606c9ae7ff7f6baa55450ee59d48ee79760f4ee3c9053d" @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("Login -_2").Page("Login -").WebButton("SIGN IN").Click @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebCheckBox("personal").Set "ON" @@ script infofile_;_ZIP::ssf24.xml_;_
 @@ script infofile_;_ZIP::ssf26.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebButton("More").Click @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebButton("Cloud Runner").Click @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebList("WebList").Click @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebEdit("WebEdit").Set "MBT (UFT)" @@ script infofile_;_ZIP::ssf30.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebCheckBox("MBT (UFT)").Set "ON" @@ script infofile_;_ZIP::ssf31.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebEdit("WebEdit_2").Set "https://github.com/mbtuser/mbtuser.git" @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf33.xml_;_
wait 1
Browser("Login -_2").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf34.xml_;_
wait 1
Browser("Login -_2").Page("Workspaces - Core Software").WebButton("Save").Click @@ script infofile_;_ZIP::ssf37.xml_;_
 @@ script infofile_;_ZIP::ssf41.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").Sync
Browser("Login -_2").Navigate "https://integration-branch-prod.almoctane.com/ui/?admin&p=21003/1002#/settings/workspace/devops/executors" @@ hightlight id_;_2561540_;_script infofile_;_ZIP::ssf42.xml_;_
Browser("Login -_2").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf43.xml_;_
Browser("Login -_2").Page("Login -").WebEdit("password").SetSecure "677f8f5bc159bc8389300f08c6efc960605e9c72c95d876f3e650fdcd12805aeebd3" @@ script infofile_;_ZIP::ssf44.xml_;_
Browser("Login -_2").Page("Login -").WebButton("SIGN IN").Click @@ script infofile_;_ZIP::ssf45.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software_2").WebCheckBox("personal").Set "ON" @@ script infofile_;_ZIP::ssf46.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software_2").WebButton("More").Click @@ script infofile_;_ZIP::ssf47.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software_2").WebButton("Cloud Runner").Click @@ script infofile_;_ZIP::ssf48.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software_2").WebList("WebList").Click @@ script infofile_;_ZIP::ssf49.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software_2").WebEdit("WebEdit").Set "MBT (UFT)" @@ script infofile_;_ZIP::ssf50.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software").WebCheckBox("MBT (UFT)").Set "ON" @@ script infofile_;_ZIP::ssf51.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software_2").WebEdit("WebEdit_2").Set "https://github.com/mbtuser/mbtuser.git" @@ script infofile_;_ZIP::ssf52.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software_2").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf53.xml_;_
If Browser("Login -_2").Page("Workspaces - Core Software").WebElement("Connection succeeded with").Exist(15) Then @@ script infofile_;_ZIP::ssf35.xml_;_
 Reporter.ReportEvent micPass, "Create runner  successful","Create runner  successful"
Else
     Reporter.ReportEvent micFail, "Create runner  failed","Create runner  failed"
End If @@ script infofile_;_ZIP::ssf55.xml_;_
Browser("Login -_2").Page("Workspaces - Core Software_2").WebButton("Save").Click @@ script infofile_;_ZIP::ssf56.xml_;_
 @@ script infofile_;_ZIP::ssf36.xml_;_
