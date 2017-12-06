enum EventType {
  Mouse,
  KeyBoard
}


interface Event {
  timestamp: number
}


interface MouseEvent extends Event {
  x1: number
  y1: number

}

interface KeyEvent extends Event {
  keyCode: number
}


function listenEvent (eventType: EventType, handler: (n: Event) => void) {

}


listenEvent(EventType.Mouse, (e: MouseEvent) => (console.log(e.x1 +','+ e.y1)))


listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x1 +','+ (<MouseEvent>e).y1) )

listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent)=> console.log(e.x1 +','+ e.y1)))


//listenEvent(EventType.Mouse, (e: number) => console.log(e))