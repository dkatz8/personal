Browser("Browser").Page("Workspaces - Core Software").WebElement("WebElement_2").Click
Browser("Browser").Page("Workspaces - Core Software").WebButton("WebButton").Click
Browser("Browser").Page("Workspaces - Core Software").Link("Model-Based Testing").Click
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add item").Click
Browser("Browser").Page("Workspaces - Core Software").WebEdit("First name").Set "Model folder"
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add & Edit      Add &").Click
Browser("Browser").Page("Workspaces - Core Software").WebButton("Model").Click
Browser("Browser").Page("Workspaces - Core Software").WebEdit("First name").Set "Model"
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add      Add").Click
If.Browser("Browser").Page("Workspaces - Core Software").WebElement("Model").Exist(15) Then
     Reporter.ReportEvent micPass, "MBT connection to the git  successful","MBT connection to the git   successful"
Else
     Reporter.ReportEvent micFail, "MBT connection to the git fail","MBT connection to the git failed"
End If
Browser("Browser").Page("Workspaces - Core Software").WebTabStrip("Details Models Units").Select "Units"
Browser("Browser").Page("Workspaces - Core Software").WebButton("Unit").Click
Browser("Browser").Page("Workspaces - Core Software").WebEdit("First name").Set "Unit"
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add      Add").Click
If.Browser("Browser").Page("Workspaces - Core Software").WebElement("Unit").Exist(15) Then
     Reporter.ReportEvent micPass, "Unit  successful","Unit   successful"
Else
     Reporter.ReportEvent micFail, "Unit fail","Unit failed"
End If
Browser("Browser").Page("Workspaces - Core Software").WebButton("WebButton_2").Click
Browser("Browser").Page("Workspaces - Core Software").Link("Issues").Click
Browser("Browser").Page("Workspaces - Core Software").WebButton("Defect").Click
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Name").Set "Defect"
Browser("Browser").Page("Workspaces - Core Software").WebList("Severity").Click
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Description textbox").Set "new defect"
Browser("Browser").Page("Workspaces - Core Software").WebCheckBox("Medium").Set "ON"
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add      Add").Click
Browser("Browser").Page("Workspaces - Core Software").WebButton("WebButton_3").Click
Browser("Browser").Page("Workspaces - Core Software").Link("Quality").Click
Browser("Browser").Page("Workspaces - Core Software").WebTabStrip("Overview Application Modules").Select "Tests"
Browser("Browser").Page("Workspaces - Core Software").WebButton("Manual Test").Click
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Name").Set "Manual test"
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Description textbox").Set "New manual text"
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add      Add").Click
If.Browser("Browser").Page("Workspaces - Core Software").WebElement("Manual test").Exist(15) Then
     Reporter.ReportEvent micPass, "Manual test  successful","Manual test   successful"
Else
     Reporter.ReportEvent micFail, "Manual test fail","Manual test failed"
End If

RunAction "Action6", oneIteration


