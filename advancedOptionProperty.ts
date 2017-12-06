class C {
  a: number
  b?: number
}



let c1 = new C()

c1.a = 3
c1.a = undefined
c1.a= null

c1.b =10
c1.b= undefined
c1.b = null


//tsc --strictNullChecks advancedOptionProperty.ts