export const updateObjectInArray = (items, objectPropName, actionItemId, newObjectProp) => {
  return items.map((u) => {
    if (u[objectPropName] === actionItemId) {
      return {...u, ...newObjectProp};
    }
    return u;
  })
}
