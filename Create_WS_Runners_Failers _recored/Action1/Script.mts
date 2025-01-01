Browser("Login -").Page("Login -").Sync
Browser("Login -").Navigate "https://integration-branch-prod.almoctane.com/ui/?p=21001/2011&admin=#/settings/workspace/devops/executors"
Browser("Login -_3").Page("Workspaces - Core Software").WebEdit("Type to search").Set "" @@ script infofile_;_ZIP::ssf63.xml_;_
Browser("Login -_3").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com" @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Login -_3").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Login -_3").Page("Login -").WebEdit("password").SetSecure "677528ed840d8e4f0028450fa7a496500854480f6ff24cbf183fde884cb65601dde0" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Login -_3").Page("Login -").WebButton("SIGN IN").Click @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebCheckBox("WS_Auto").Set "ON" @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("More").Click @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("Cloud Runner").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebList("WebList").Click @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebEdit("WebEdit").Set "UFT" @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebCheckBox("UFT").Set "ON" @@ script infofile_;_ZIP::ssf24.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebEdit("WebEdit_2").Set "https://github.com/mbtuser/mbtuser.git" @@ script infofile_;_ZIP::ssf25.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf26.xml_;_
wait 5
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("Save").Click @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("Cloud Runner").Click @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebList("WebList").Click @@ script infofile_;_ZIP::ssf30.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebEdit("WebEdit").Set "UFT2" @@ script infofile_;_ZIP::ssf31.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebCheckBox("UFT").Set "ON" @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebEdit("WebEdit_2").Set "https://github.com/mbtuser/mbtuser.git" @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf34.xml_;_
wait 5
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("Save").Click
Browser("Login -_3").Navigate "https://integration-branch-prod.almoctane.com/ui/?p=21001/2011&admin=#/settings/workspace/devops/executors" @@ hightlight id_;_9247308_;_script infofile_;_ZIP::ssf37.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("More").Click @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("Cloud Runner").Click @@ script infofile_;_ZIP::ssf39.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebList("WebList").Click @@ script infofile_;_ZIP::ssf40.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebEdit("WebEdit").Set "UFT" @@ script infofile_;_ZIP::ssf41.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebCheckBox("UFT").Set "ON" @@ script infofile_;_ZIP::ssf42.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebEdit("WebEdit_2").Set "https://github.com/mbtuser/FTEUFTOne.git" @@ script infofile_;_ZIP::ssf43.xml_;_
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf44.xml_;_
wait 5
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("Test Connection").Click
Browser("Login -_3").Page("Workspaces - Core Software").WebButton("Save").Click @@ script infofile_;_ZIP::ssf45.xml_;_

 @@ hightlight id_;_9247308_;_script infofile_;_ZIP::ssf46.xml_;_
 @@ script infofile_;_ZIP::ssf60.xml_;_
