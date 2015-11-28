/// <reference path="./Evented.ts" />

function eventedExampleUsage() {
  var bob : Evented = new Evented();
  var eventName : string = "xxx:yyy";

  // assign many listeners to single event
  bob.on(eventName, function (...params) {
    console.log("1st listener triggered", params);
  });
  bob.on(eventName, function (...params) {
    console.log("2nd listener triggered...", params);
  });

  // trigger event
  bob.trigger(eventName, 1, "qq"); // loged msg on console

  // remove all event listeners
  bob.off(eventName);

  // trigger event
  bob.trigger(eventName, 1, "qq"); // nothing logged
  console.log("eventedExampleUsage() END");
}

eventedExampleUsage();
