// use library to factor repeated code

//var player = {loc:1};
//player.loc ++;
var player = carlike ({}, 1);
//move(player);
player.move();

//var enemy = {loc:9};
//enemy.loc ++;
var enemy = carlike ({}, 9);
//move(enemy);
enemy.move();

//build and run instances from class constructor functions instead
var player = new Car(1);
player.move();
var enemy = new Car(9);
enemy.move();