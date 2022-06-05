var cust_order = [];
var totalPrice = 0;

        function displayProduct() {
            console.log(cust_order);
            document.getElementById("flex-container").innerHTML = "";
            var totalPrice = 0;
            for (var i = 0; i < cust_order.length; i++) {
                if (cust_order[i] != "fake") {
                    document.getElementById("flex-container").innerHTML += "<tr><td><h5><strong id=" + i + ">" + cust_order[i].prod_name +
                        "</strong></h5><br><h6>₱" + cust_order[i].prod_price + ".00" + "&nbsp;" + "</h6></td><td><button id='something' ' class='btn btn-danger' style='float: right;' onClick='removeItem(" + i + ")'>Remove</button></td></tr>" + "</br></br>";

                    var productPrice = cust_order[i].prod_price;
                    totalPrice = totalPrice + productPrice;
                }
            }
            document.getElementById("pageTotal").innerHTML = "Total Price: " + "₱" + totalPrice;
        }

        function removeItem(index) {
            cust_order[index] = "fake";
            displayProduct();
        }

        function washMach() {
            var washMah = {
                prod_name: "Washing Machine",
                prod_price: 10500
            };
            cust_order.push(washMah);
            pampaGanaNgCode;
            washMah = {};
        }

        function refRef() {
            var RefRf = {
                prod_name: "Whirlpool Refrigerator",
                prod_price: 25020
            };
            cust_order.push(refRf);
            pampaGanaNgCode;
            refRf = {};
        }

        function vacVac() {
            var vacVc = {
                prod_name: "Vacuum Cleaner",
                prod_price: 10300
            };
            cust_order.push(vacVc);
            pampaGanaNgCode;
            vacVc = {};
        }

        function elecElec() {
            var elecElc = {
                prod_name: "Panasonic Electric Fan",
                prod_price: 5400
            };
            cust_order.push(elecElc);
            pampaGanaNgCode;
            elecElc = {};
        }

        function micMic() {
            var micMc = {
                prod_name: "Samsung Microwave",
                prod_price: 17030
            };
            cust_order.push(micMc);
            pampaGanaNgCode;
            micMc = {};
        }

        function bleBle() {
            var bleBe = {
                prod_name: "All-Clad Blender",
                prod_price: 690
            };
            cust_order.push(bleBe);
            pampaGanaNgCode;
            bleBe = {};
        }

        function legLeg() {
            var legLg = {
                prod_name: "Lego Set",
                prod_price: 3500
            };
            cust_order.push(legLg);
            pampaGanaNgCode;
            legLg = {};
        }

        function tedTed() {
            var tedTd = {
                prod_name: "Teddy Bear",
                prod_price: 400
            };
            cust_order.push(tedTd);
            pampaGanaNgCode;
            tedTd = {};
        }

        function spiSpi() {
            var spiSi = {
                prod_name: "Spinners",
                prod_price: 100
            };
            cust_order.push(spiSi);
            pampaGanaNgCode;
            spiSi = {};
        }

        function rubRub() {
            var rubRb = {
                prod_name: "Rubik's Cube",
                prod_price: 700
            };
            cust_order.push(rubRb);
            pampaGanaNgCode;
            rubRb = {};
        }

        function carCar() {
            var carCr = {
                prod_name: "Toy Car",
                prod_price: 650
            };
            cust_order.push(carCr);
            pampaGanaNgCode;
            carCr = {};
        }

        function pikPik() {
            var pikPk = {
                prod_name: "Pikachu Toy",
                prod_price: 2900
            };
            cust_order.push(pikPk);
            pampaGanaNgCode;
            pikPk = {};
        }

        function poloPolo() {
            var poloPlo = {
                prod_name: "Polo Shirt",
                prod_price: 500
            };
            cust_order.push(poloPlo);
            pampaGanaNgCode;
            poloPlo = {};
        }

        function treTre() {
            var treTe = {
                prod_name: "Trench Coat",
                prod_price: 17600
            };
            cust_order.push(treTe);
            pampaGanaNgCode;
            treTe = {};
        }

        function graGra() {
            var graGr = {
                prod_name: "Gray Sweater",
                prod_price: 1000
            };
            cust_order.push(graGr);
            pampaGanaNgCode;
            graGr = {};
        }

        function broBro() {
            var broBr = {
                prod_name: "Brown Pants",
                prod_price: 3770
            };
            cust_order.push(broBr);
            pampaGanaNgCode;
            broBr = {};
        }

        function spoSpo() {
            var spoSo = {
                prod_name: "Sports Shorts",
                prod_price: 800
            };
            cust_order.push(spoSo);
            pampaGanaNgCode;
            spoSo = {};
        }

        function jeJe() {
            var jeJee = {
                prod_name: "Jeans",
                prod_price: 900
            };
            cust_order.push(jeJee);
            pampaGanaNgCode;
            jeJee = {};
        }

        function necNec() {
            var necNc = {
                prod_name: "Necklace",
                prod_price: 299.99
            };
            cust_order.push(necNc);
            pampaGanaNgCode;
            necNc = {};
        }

        function waWa() {
            var waWaw = {
                prod_name: "Watch",
                prod_price: 1999.99
            };
            cust_order.push(waWaw);
            pampaGanaNgCode;
            waWaw = {};
        }

        function sunSun() {
            var sunSuna = {
                prod_name: "Sunglasses",
                prod_price: 49.99
            };
            cust_order.push(sunSuna);
            pampaGanaNgCode;
            sunSuna = {};
        }

        function beltBelt() {
            var beltBelta = {
                prod_name: "Belt",
                prod_price: 19.99
            };
            cust_order.push(beltBelta);
            pampaGanaNgCode;
            beltBelta = {};
        }

        function heHe() {
            var heHea = {
                prod_name: "Headphones",
                prod_price: 79.99
            };
            cust_order.push(heHea);
            pampaGanaNgCode;
            heHea = {};
        }

        function bracBrac() {
            var bracBraca = {
                prod_name: "Bracelet",
                prod_price: 19.99
            };
            cust_order.push(bracBraca);
            pampaGanaNgCode;
            bracBraca = {};
        }

        function pampaGanaNgCode() {
            var i = cust_order.length;

            while (i--) {
                if (cust_order[i] === "fake") {
                    cust_order.splice(cust_order.indexOf("fake"), 1);
                }
            }
            console.log(cust_order);
            pampaGanaNgCodereal();
        }
        function pampaGanaNgCodereal() {
            var products = JSON.stringify(cust_order);
            document.getElementById("cust_order").value = products;
        }
