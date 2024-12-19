Browser("Login -").Page("Login -").WebEdit("federateLoginName").Set "mqm_rnd@hpe.com" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Login -").Page("Login -").WebEdit("password").SetSecure "6762ecdc605fbc681198f40970b6d68dcce27ab522a419002943d2a01f3c51ed12cd" @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("Login -").Page("Login -").WebButton("SIGN IN").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("More").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Cloud Runner").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebList("WebList").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("WebEdit").Set "test" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebCheckBox("UFT").Set "ON" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebEdit("WebEdit_2").Set "https://github.com/mbtuser/FTEUFTOne.git" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Login -").Page("Workspaces - Core Software").Image("user avatar").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Login -").Page("Workspaces - Core Software").WebButton("Sign out").Click @@ script infofile_;_ZIP::ssf16.xml_;_
 @@ script infofile_;_ZIP::ssf14.xml_;_
 @@ script infofile_;_ZIP::ssf21.xml_;_
