Browser("Browser").Page("Workspaces - Core Software").WebElement("DevOps").Click
Browser("Browser").Page("Workspaces - Core Software").WebElement("Test Runners").Click
If.Browser("Browser").Page("Workspaces - Core Software").WebElement("Codeless Runner").Exist(15) Then
     Reporter.ReportEvent micPass, "Codeless runner exist successful","Codeless runner  exist   successful"
Else
     Reporter.ReportEvent micFail, "Codeless runner exist  fail","Codeless runner exist failed"
End If

RunAction "Action4", oneIteration
