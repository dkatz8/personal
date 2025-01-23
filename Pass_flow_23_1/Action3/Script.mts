Browser("Browser").Page("Page").Sync
Browser("Browser").Navigate "https://integration-branch-prod.almoctane.com/ui/?admin&p=21003/4002#/settings/workspace/users"
Browser("Browser").Page("Workspaces - Core Software").WebButton("User").Click
Browser("Browser").Page("Workspaces - Core Software").WebEdit("First name").Set "d"
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Last name").Set "k"
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Email").Set "dkatz@opentext.com"
Browser("Browser").Page("Workspaces - Core Software").WebElement("WebElement").Click
Browser("Browser").Page("Workspaces - Core Software").WebList("Roles").Click
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Phone").Set "123"
Browser("Browser").Page("Workspaces - Core Software").WebCheckBox("Workspace Admin").Set "ON"
Browser("Browser").Page("Workspaces - Core Software").WebButton("OK").Click
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add & Another").Click
Browser("Browser").Page("Workspaces - Core Software").WebEdit("First name").Set "M"
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Last name").Set "R"
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Email").Set "myohayrafalo@opentext.com"
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Phone").Set "456"
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add & Another").Click
Browser("Browser").Page("Workspaces - Core Software").WebEdit("First name").Set "R"
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Last name").Set "K"
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Email").Set "rkarat@opentext.com"
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Phone").Set "987"
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add & Another").Click
Browser("Browser").Page("Workspaces - Core Software").WebEdit("First name").Set "T"
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Last name").Set "F"
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Email").Set "tfarchi@opentext.com"
Browser("Browser").Page("Workspaces - Core Software").WebEdit("Phone").Set "741"
Browser("Browser").Page("Workspaces - Core Software").WebButton("Add      Add").Click
RunAction "Action3", oneIteration
