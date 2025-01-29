

Browser("Tanks - Tops - Men - Magento").Page("Openbare Magento 2 demo").Sync
Browser("Tanks - Tops - Men - Magento").Navigate "https://magento2demo.firemultimedia.nl/" @@ hightlight id_;_332588_;_script infofile_;_ZIP::ssf61.xml_;_

Browser("Tanks - Tops - Men - Magento").Page("Openbare Magento 2 demo").WebEdit("q").Set "bag" @@ script infofile_;_ZIP::ssf62.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Openbare Magento 2 demo").WebEdit("q").Submit @@ script infofile_;_ZIP::ssf63.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Zoekresultaten voor: ‘bag’").Image("Push It Messenger Bag").Click @@ script infofile_;_ZIP::ssf64.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Push It Messenger Bag").WebButton("In Winkelwagen").Click @@ script infofile_;_ZIP::ssf65.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Push It Messenger Bag").Link("Reviews 3").Click @@ script infofile_;_ZIP::ssf66.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Push It Messenger Bag").Link("Meer informatie").Click @@ script infofile_;_ZIP::ssf67.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Push It Messenger Bag").Link("Gegevens").Click @@ script infofile_;_ZIP::ssf68.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Push It Messenger Bag").Image("Fusion Backpack").Click @@ script infofile_;_ZIP::ssf69.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Fusion Backpack - Magento").Link("3  Reviews").Click @@ script infofile_;_ZIP::ssf70.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Fusion Backpack - Magento").WebButton("In Winkelwagen").Click @@ script infofile_;_ZIP::ssf71.xml_;_

Browser("Tanks - Tops - Men - Magento").Page("Fusion Backpack - Magento").Link("Winkelwagen 2 2 items").Click @@ script infofile_;_ZIP::ssf74.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Fusion Backpack - Magento").WebButton("Ga door naar afrekenen").Click @@ script infofile_;_ZIP::ssf75.xml_;_

Browser("Tanks - Tops - Men - Magento").Page("Afrekenen - Magento").WebEdit("username").Set "avin8n@gmail.com" @@ script infofile_;_ZIP::ssf76.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Afrekenen - Magento").WebEdit("firstname").Set "Avi" @@ script infofile_;_ZIP::ssf77.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Afrekenen - Magento").WebEdit("lastname").Set "nimni" @@ script infofile_;_ZIP::ssf78.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Afrekenen - Magento").WebEdit("street[0]").Set "hadera" @@ script infofile_;_ZIP::ssf79.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Afrekenen - Magento").WebList("country_id").Select "Andorra" @@ script infofile_;_ZIP::ssf80.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Afrekenen - Magento").WebEdit("city").Set "1234567" @@ script infofile_;_ZIP::ssf81.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Afrekenen - Magento").WebEdit("postcode").Set "5656565" @@ script infofile_;_ZIP::ssf82.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Afrekenen - Magento").WebEdit("telephone").Set "050693669" @@ script infofile_;_ZIP::ssf83.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Afrekenen - Magento").WebRadioGroup("Free").Select "freeshipping_freeshipping" @@ script infofile_;_ZIP::ssf84.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Afrekenen - Magento").WebButton("Volgende").Click @@ script infofile_;_ZIP::ssf85.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Afrekenen - Magento").WebRadioGroup("payment[method]").Select "cashondelivery" @@ script infofile_;_ZIP::ssf86.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Afrekenen - Magento").WebButton("Nu bestellen en betalen").Click @@ script infofile_;_ZIP::ssf87.xml_;_
Browser("Tanks - Tops - Men - Magento").Page("Success Page - Magento").WebElement("Bedankt voor uw bestelling!").Click @@ script infofile_;_ZIP::ssf88.xml_;_
If.Browser("Tanks - Tops - Men - Magento").Page("Success Page - Magento").WebElement("Bedankt voor uw bestelling!").Exist(15) Then
     Reporter.ReportEvent micPass, "Buy a bag  successful","Buy a bag   successful"
Else
     Reporter.ReportEvent micFail, "Buy a bag fail","Buy a bag  failed"
End If @@ script infofile_;_ZIP::ssf89.xml_;_

