﻿ @@ script infofile_;_ZIP::ssf40.xml_;_
Browser("Login -").Page("Functional Test Execution").Sync
Browser("Login -").Navigate "https://internal.almoctane.com/ui/?p=219004/14001#/fte/fte-overview" @@ hightlight id_;_6491464_;_script infofile_;_ZIP::ssf51.xml_;_
 @@ script infofile_;_ZIP::ssf70.xml_;_
Browser("Login -").Page("Login -").WebElement("Back > Sign in with corporate_2").Click @@ script infofile_;_ZIP::ssf52.xml_;_
Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set "dkatz@opentext.com" @@ script infofile_;_ZIP::ssf58.xml_;_
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf59.xml_;_
Browser("Login -").Page("Login -").WebEdit("password").SetSecure "67864e7232bbfc292231880ae6d3f40bfe1f754f15b12c143463254248c4" @@ script infofile_;_ZIP::ssf60.xml_;_
Browser("Login -").Page("Login -").WebButton("SIGN IN").Click
Wait 3
Browser("Login -").Page("Functional Test Execution").WebButton("Tests").Click
Wait 3
Browser("Login -").Page("Functional Test Execution").WebButton("More").Click @@ script infofile_;_ZIP::ssf86.xml_;_
Wait 3
Browser("Login -").Page("Functional Test Execution").WebButton("Codeless Test").Click @@ script infofile_;_ZIP::ssf87.xml_;_
Wait 3
Browser("Login -").Page("Functional Test Execution").WebEdit("Name").Set "codeless test stable " @@ script infofile_;_ZIP::ssf88.xml_;_
Wait 3
Browser("Login -").Page("Functional Test Execution").WebButton("Add & Edit      Add &").Click @@ script infofile_;_ZIP::ssf89.xml_;_
Wait 3
if Browser("Login -").Page("Functional Test Execution").WebButton("Open in Design").Exist(15) Then
     Reporter.ReportEvent micPass, "Create codeless tets on stable successful","Create codeless tets on stable successful"
Else
     Reporter.ReportEvent micFail, "Create codeless tets on stable  fail","Create codeless tets on stable failed"
End If
Browser("Login -").Page("Functional Test Execution").WebButton("Select workspace").Click @@ script infofile_;_ZIP::ssf92.xml_;_
Browser("Login -").Page("Functional Test Execution").WebEdit("Type to search").Set "personal" @@ script infofile_;_ZIP::ssf93.xml_;_
Browser("Login -").Page("Functional Test Execution").WebCheckBox("personal").Set "ON" @@ script infofile_;_ZIP::ssf94.xml_;_
Browser("Login -").Page("Functional Test Execution").WebButton("More").Click @@ script infofile_;_ZIP::ssf95.xml_;_
Browser("Login -").Page("Functional Test Execution").WebButton("Codeless Test").Click @@ script infofile_;_ZIP::ssf96.xml_;_
Browser("Login -").Page("Functional Test Execution").WebEdit("Name").Set "codeless test daily" @@ script infofile_;_ZIP::ssf97.xml_;_
Browser("Login -").Page("Functional Test Execution").WebButton("Add & Edit      Add &").Click @@ script infofile_;_ZIP::ssf98.xml_;_
if Browser("Login -").Page("Functional Test Execution").WebButton("Open in Design")
Browser("Login -").Page("Functional Test Execution").WebButton("Tests").Click @@ hightlight id_;_1644006_;_script infofile_;_ZIP::ssf114.xml_;_
Browser("Login -").Page("Functional Test Execution").WebButton("More").Click @@ script infofile_;_ZIP::ssf115.xml_;_
Browser("Login -").Page("Functional Test Execution").WebButton("Codeless Test").Click @@ script infofile_;_ZIP::ssf116.xml_;_
Browser("Login -").Page("Functional Test Execution").WebEdit("Name").Set "codeless test new" @@ script infofile_;_ZIP::ssf117.xml_;_
Browser("Login -").Page("Functional Test Execution").WebEdit("Description textbox").Set "this test created on daily env" @@ script infofile_;_ZIP::ssf118.xml_;_
Browser("Login -").Page("Functional Test Execution").WebButton("Add & Edit      Add &").Click @@ script infofile_;_ZIP::ssf119.xml_;_
Browser("Login -").Page("Functional Test Execution").WebButton("Open in Design").Exist(15) Then
     Reporter.ReportEvent micPass, "Create codeless tets  on daily successful","Create codeless tets  on daily  successful"
Else
     Reporter.ReportEvent micFail, "Create codeless tets  on daily fail","Create codeless tets  on dailyfailed"
End If @@ hightlight id_;_1644006_;_script infofile_;_ZIP::ssf121.xml_;_