function f1 (sn: string | null) : string {
  if (sn == null) {
    return 'default'
  }
  return sn
}


function f2 (sn: string | null): string {
  return sn || 'default'
}




function broken (name: string | null): string {
  function postfix (epithet: string) {
    return name!.charAt(0) + '. the' + epithet
  }
  name = name || 'bob'
  return postfix ('great')
}


//tsc --strictNullChecks advancedTypeAssert.ts