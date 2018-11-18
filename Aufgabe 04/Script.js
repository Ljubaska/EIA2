var Weihnachtsbaumkonfigurator;
(function (Weihnachtsbaumkonfigurator) {
    window.addEventListener("load", init);
    let totalPrice = 0;
    let ballPrice;
    let lamettaPrice;
    let candlePrice;
    let treePrice;
    let shipmentPrice;
    let shipmentboolean;
    let ballNum;
    let lamettaNum;
    let candleNum;
    let adress = "";
    function init() {
        fillFieldset();
        document.getElementsByTagName("fieldset")[0].addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", check);
    }
    function fillFieldset() {
        let node = document.getElementsByTagName("fieldset")[0];
        let HTML = "";
        HTML += "<h2>Weihnachtskugeln:</h2>";
        HTML += "<select id=christmasBall name=ChristmasBalls>";
        HTML += "<option value=0 selected></option>";
        for (let i = 0; i < Weihnachtsbaumkonfigurator.ball.length; i++) {
            HTML += "<option value=";
            HTML += "CMB" + i;
            HTML += ">";
            HTML += Weihnachtsbaumkonfigurator.ball[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h3>Anzahl:</h3>";
        HTML += "<select id=CMBAnzahl name=anzahl>";
        HTML += "<option value=clear selected></option>";
        for (let i = 0; i < 35; i += 5) {
            HTML += "<option value=CMBnum";
            HTML += i;
            HTML += " id=CBMnum";
            HTML += i;
            HTML += ">";
            HTML += i;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h2>Lametta:</h2>";
        HTML += "<select id=lametta name=Lametta>";
        HTML += "<option value=clear selected></option>";
        for (let i = 0; i < Weihnachtsbaumkonfigurator.lametta.length; i++) {
            HTML += "<option value=";
            HTML += "lam" + i;
            HTML += ">";
            HTML += Weihnachtsbaumkonfigurator.lametta[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h3>Anzahl:</h3>";
        HTML += "<select id=lamettaAnzahl name=anzahl>";
        HTML += "<option value=clear selected></option>";
        for (let i = 0; i < 60; i += 10) {
            HTML += "<option value=lamettanum";
            HTML += i;
            HTML += " id=lamettanum";
            HTML += i;
            HTML += ">";
            HTML += i;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h2>Kerzen:</h2>";
        HTML += "<select id=candle name=Candle>";
        HTML += "<option value=clear selected></option>";
        for (let i = 0; i < Weihnachtsbaumkonfigurator.candle.length; i++) {
            HTML += "<option value=";
            HTML += "cndl" + i;
            HTML += ">";
            HTML += Weihnachtsbaumkonfigurator.candle[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h3>Anzahl:</h3>";
        HTML += "<select id=candleAnzahl name=anzahl>";
        HTML += "<option value=clear selected></option>";
        for (let i = 0; i < 22; i += 2) {
            HTML += "<option value=candlenum";
            HTML += i;
            HTML += " id=candlenum";
            HTML += i;
            HTML += ">";
            HTML += i;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h2>Weihnachtsbaum:</h2>";
        HTML += "<select id=tree name=Tree>";
        HTML += "<option value=clear selected></option>";
        for (let i = 0; i < Weihnachtsbaumkonfigurator.tree.length; i++) {
            HTML += "<option value=";
            HTML += "tree" + i;
            HTML += ">";
            HTML += Weihnachtsbaumkonfigurator.tree[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h2>Versand:</h2>";
        HTML += "<p>Express-Lieferung</p>";
        HTML += "<input id=ja1 type=radio name=Radiogroup1 value=ja1>";
        HTML += "<label for=ja1>Ja</label>";
        HTML += "<input id=nein1 type=radio name=Radiogroup1 value=nein1 checked>";
        HTML += "<label for=nein1>Nein</label>";
        HTML += "<br>";
        HTML += "<select id=shipment name=Shipment>";
        HTML += "<option value=clear selected></option>";
        for (let i = 0; i < Weihnachtsbaumkonfigurator.shipment.length; i++) {
            HTML += "<option value=";
            HTML += "shipment" + i;
            HTML += ">";
            HTML += Weihnachtsbaumkonfigurator.shipment[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h2>Adresse:</h2>";
        HTML += "<input id=adressID type=text name=Text placeholder=Adresse>";
        node.innerHTML += HTML;
    }
    function calcPrice() {
        let cBallsCalc = 0;
        let lamettaCalc = 0;
        let candleCalc = 0;
        if (ballPrice > 0 && ballNum > 0) {
            cBallsCalc = ballPrice * ballNum;
        }
        if (lamettaPrice > 0 && lamettaNum > 0) {
            lamettaCalc = lamettaPrice * lamettaNum;
        }
        if (candlePrice > 0 && candleNum > 0) {
            candleCalc = candlePrice * candleNum;
        }
        console.log(cBallsCalc);
        totalPrice = 0;
        if (cBallsCalc > 0) {
            totalPrice += cBallsCalc;
        }
        if (lamettaCalc > 0) {
            totalPrice += lamettaCalc;
        }
        if (candleCalc > 0) {
            totalPrice += candleCalc;
        }
        if (treePrice > 0) {
            totalPrice += treePrice;
        }
        if (shipmentPrice > 0) {
            totalPrice += shipmentPrice;
        }
        let HTML = "";
        HTML += totalPrice;
        document.getElementById("price").innerHTML = HTML;
    }
    function handleChange(_event) {
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        console.log(target.id);
        if (target.id == "christmasBall") {
            let convertedString = target.value.substr(3);
            let index = Number(convertedString);
            let HTML = "<p id=GKcolor>";
            HTML += Weihnachtsbaumkonfigurator.ball[index].name;
            HTML += "</p>";
            ballPrice = Weihnachtsbaumkonfigurator.ball[index].price;
            let node = document.getElementById("co1");
            node.innerHTML = HTML;
        }
        if (target.id == "CMBAnzahl") {
            ballNum = Number(target.value.substr(6));
            let HTML = "";
            HTML = "<p id=GKnum value=";
            HTML += target.value.substr(6);
            HTML += ">";
            HTML += target.value.substr(6);
            HTML += "</p>";
            let node = document.getElementById("co2");
            node.innerHTML = HTML;
        }
        if (target.id == "lametta") {
            let convertedString = target.value.substr(3);
            let index = Number(convertedString);
            let HTML = Weihnachtsbaumkonfigurator.lametta[index].name;
            lamettaPrice = Weihnachtsbaumkonfigurator.lametta[index].price;
            let node = document.getElementById("Lcolor");
            node.innerHTML = HTML;
        }
        if (target.id == "lamettaAnzahl") {
            lamettaNum = Number(target.value.substr(10));
            let HTML = "";
            HTML = target.value.substr(10);
            let node = document.getElementById("Lnum");
            node.innerHTML = HTML;
        }
        if (target.id == "candle") {
            let convertedString = target.value.substr(4);
            let index = Number(convertedString);
            let HTML = Weihnachtsbaumkonfigurator.candle[index].name;
            candlePrice = Weihnachtsbaumkonfigurator.candle[index].price;
            let node = document.getElementById("CNDLcolor");
            node.innerHTML = HTML;
        }
        if (target.id == "candleAnzahl") {
            candleNum = Number(target.value.substr(9));
            let HTML = "";
            HTML = target.value.substr(9);
            let node = document.getElementById("CNDLnum");
            node.innerHTML = HTML;
        }
        if (target.id == "tree") {
            let convertedString = target.value.substr(4);
            let index = Number(convertedString);
            let HTML = Weihnachtsbaumkonfigurator.tree[index].name;
            treePrice = Weihnachtsbaumkonfigurator.tree[index].price;
            let node = document.getElementById("christtree");
            node.innerHTML = HTML;
        }
        if (target.id == "ja1") {
            let HTML = "Ja";
            shipmentboolean = true;
            let node = document.getElementById("express");
            node.innerHTML = HTML;
        }
        if (target.id == "nein1") {
            let HTML = "Nein";
            shipmentboolean = false;
            let node = document.getElementById("express");
            node.innerHTML = HTML;
        }
        if (target.id == "shipment") {
            let convertedString = target.value.substr(8);
            console.log(convertedString);
            let index = Number(convertedString);
            let HTML = Weihnachtsbaumkonfigurator.shipment[index].name;
            shipmentPrice = Weihnachtsbaumkonfigurator.shipment[index].price;
            let node = document.getElementById("shipmentCheckout");
            node.innerHTML = HTML;
        }
        if (target.id == "adressID") {
            let HTML = "";
            HTML += target.value;
            adress = target.value;
            let node = document.getElementById("adress");
            node.innerHTML = HTML;
        }
        calcPrice();
    }
    function check() {
        console.log("test");
        if (ballPrice == null || lamettaPrice == null || candlePrice == null || treePrice == null || shipmentPrice == null || ballNum == null || lamettaNum == null || candleNum == null || adress.length < 1) {
            document.getElementById("missing").innerHTML = "selections missing";
        }
        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
})(Weihnachtsbaumkonfigurator || (Weihnachtsbaumkonfigurator = {}));
//# sourceMappingURL=Script.js.map