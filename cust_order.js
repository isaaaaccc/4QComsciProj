var cust_order = [];
var totalPrice = 0;

        function displayProduct() {
            console.log(cust_order);
            document.getElementById("ulCart").innerHTML = "";
            var totalPrice = 0;
            for (var i = 0; i < cust_order.length; i++) {
                if (cust_order[i] != "fake") {
                    document.getElementById("ulCart").innerHTML += "<tr><td><h5><strong id=" + i + ">" + cust_order[i].prod_name +
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
            var washMach = {
                prod_name: "Washing Machine",
                prod_price: 10500
            };
            cust_order.push(washMach);
            displayProduct();
            washMach = {};
        }

        function refRef() {
            var RefRef = {
                prod_name: "Whirlpool Refrigerator",
                prod_price: 25020
            };
            cust_order.push(refRef);
            displayProduct();
            refRef = {};
        }

        function vacVac() {
            var vacVac = {
                prod_name: "Vacuum Cleaner",
                prod_price: 10300
            };
            cust_order.push(vacVac);
            displayProduct();
            vacVac = {};
        }

        function elecElec() {
            var elecElec = {
                prod_name: "Panasonic Electric Fan",
                prod_price: 5400
            };
            cust_order.push(elecElec);
            displayProduct();
            elecElec = {};
        }

        function micMic() {
            var micMic = {
                prod_name: "Samsung Microwave",
                prod_price: 17030
            };
            cust_order.push(micMic);
            displayProduct();
            micMic = {};
        }

        function bleBle() {
            var bleBle = {
                prod_name: "All-Clad Blender",
                prod_price: 690
            };
            cust_order.push(bleBle);
            displayProduct();
            bleBle = {};
        }

        function legLeg() {
            var legLeg = {
                prod_name: "Lego Set",
                prod_price: 3500
            };
            cust_order.push(legLeg);
            displayProduct();
            legLeg = {};
        }

        function tedTed() {
            var tedTed = {
                prod_name: "Teddy Bear",
                prod_price: 400
            };
            cust_order.push(tedTed);
            displayProduct();
            tedTed = {};
        }

        function spiSpi() {
            var spiSpi = {
                prod_name: "Spinners",
                prod_price: 100
            };
            cust_order.push(spiSpi);
            displayProduct();
            spiSpi = {};
        }

        function rubRub() {
            var rubRub = {
                prod_name: "Rubik's Cube",
                prod_price: 700
            };
            cust_order.push(rubRub);
            displayProduct();
            rubRub = {};
        }

        function carCar() {
            var carCar = {
                prod_name: "Toy Car",
                prod_price: 650
            };
            cust_order.push(carCar);
            displayProduct();
            carCar = {};
        }

        function pikPik() {
            var pikPik = {
                prod_name: "Pikachu Toy",
                prod_price: 2900
            };
            cust_order.push(pikPik);
            displayProduct();
            pikPik = {};
        }

        function poloPolo() {
            var poloPolo = {
                prod_name: "Polo Shirt",
                prod_price: 500
            };
            cust_order.push(poloPolo);
            displayProduct();
            poloPolo = {};
        }

        function treTre() {
            var treTre = {
                prod_name: "Trench Coat",
                prod_price: 17600
            };
            cust_order.push(treTre);
            displayProduct();
            treTre = {};
        }

        function graGra() {
            var graGra = {
                prod_name: "Gray Sweater",
                prod_price: 1000
            };
            cust_order.push(graGra);
            displayProduct();
            graGra = {};
        }

        function broBro() {
            var broBro = {
                prod_name: "Brown Pants",
                prod_price: 3770
            };
            cust_order.push(broBro);
            displayProduct();
            broBro = {};
        }

        function spoSpo() {
            var spoSpo = {
                prod_name: "Sports Shorts",
                prod_price: 800
            };
            cust_order.push(spoSpo);
            displayProduct();
            spoSpo = {};
        }

        function jeJe() {
            var jeJe = {
                prod_name: "Jeans",
                prod_price: 900
            };
            cust_order.push(jeJe);
            displayProduct();
            jeJe = {};
        }

        function necNec() {
            var necNec = {
                prod_name: "Necklace",
                prod_price: 299.99
            };
            cust_order.push(necNec);
            displayProduct();
            necNec = {};
        }

        function waWa() {
            var waWa = {
                prod_name: "Watch",
                prod_price: 1999.99
            };
            cust_order.push(waWa);
            displayProduct();
            waWa = {};
        }

        function sunSun() {
            var sunSun = {
                prod_name: "Sunglasses",
                prod_price: 49.99
            };
            cust_order.push(sunSun);
            displayProduct();
            sunSun = {};
        }

        function beltBelt() {
            var beltBelt = {
                prod_name: "Belt",
                prod_price: 19.99
            };
            cust_order.push(beltBelt);
            displayProduct();
            beltBelt = {};
        }

        function heHe() {
            var heHe = {
                prod_name: "Headphones",
                prod_price: 79.99
            };
            cust_order.push(heHe);
            displayProduct();
            heHe = {};
        }

        function bracBrac() {
            var bracBrac = {
                prod_name: "Bracelet",
                prod_price: 19.99
            };
            cust_order.push(bracBrac);
            displayProduct();
            bracBrac = {};
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