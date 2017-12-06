var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["KeyBoard"] = 1] = "KeyBoard";
})(EventType || (EventType = {}));
function listenEvent(eventType, handler) {
}
listenEvent(EventType.Mouse, function (e) { return (console.log(e.x1 + ',' + e.y1)); });
listenEvent(EventType.Mouse, function (e) { return console.log(e.x1 + ',' + e.y1); });
listenEvent(EventType.Mouse, (function (e) { return console.log(e.x1 + ',' + e.y1); }));
//listenEvent(EventType.Mouse, (e: number) => console.log(e)) 
