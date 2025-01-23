Browser("Browser").Page("Workspaces - Core Software").WebButton("More").Click
Browser("Browser").Page("Workspaces - Core Software").WebButton("Cloud Runner").Click
Browser("Browser").Page("Workspaces - Core Software").WebList("WebList").Click
Browser("Browser").Page("Workspaces - Core Software").WebEdit("WebEdit").Set "UFT"
Browser("Browser").Page("Workspaces - Core Software").WebCheckBox("UFT").Set "ON"
Browser("Browser").Page("Workspaces - Core Software").WebEdit("WebEdit_2").Set "https://github.com/mbtuser/mbtuser.git"
Browser("Browser").Page("Workspaces - Core Software").WebButton("Test Connection").Click
wait 1 
Browser("Browser").Page("Workspaces - Core Software").WebButton("Test Connection").Click
If.Browser("Browser").Page("Workspaces - Core Software").WebElement("Connection succeeded with").Exist(15) Then
     Reporter.ReportEvent micPass, "UFT connection to the git  successful","UFT connection to the git   successful"
Else
     Reporter.ReportEvent micFail, "UFT connection to the git fail","UFT connection to the git failed"
End If
Browser("Browser").Page("Workspaces - Core Software").WebButton("Save").Click
Browser("Browser").Page("Workspaces - Core Software").WebButton("Cloud Runner").Click
Browser("Browser").Page("Workspaces - Core Software").WebList("WebList").Click
Browser("Browser").Page("Workspaces - Core Software").WebEdit("WebEdit").Set "MBT"
Browser("Browser").Page("Workspaces - Core Software").WebCheckBox("MBT (Open Text Functional").Set "ON"
Browser("Browser").Page("Workspaces - Core Software").WebEdit("WebEdit_2").Set "https://github.com/mbtuser/mbtuser.git"
Browser("Browser").Page("Workspaces - Core Software").WebButton("Test Connection").Click
Browser("Browser").Page("Workspaces - Core Software").WebButton("Test Connection").Click
If.Browser("Browser").Page("Workspaces - Core Software").WebElement("Connection succeeded with").Exist(15) Then
     Reporter.ReportEvent micPass, "UFT connection to the git  successful","UFT connection to the git   successful"
Else
     Reporter.ReportEvent micFail, "UFT connection to the git fail","UFT connection to the git failed"
End If
Browser("Browser").Page("Workspaces - Core Software").WebButton("Save").Click

RunAction "Action5", oneIteration
