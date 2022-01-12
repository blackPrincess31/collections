
export const getAddCollectionsState = store => store.collections;

export const getAddCollectionsList = store =>
  getAddCollectionsState(store) ? getAddCollectionsState(store).allIds : [];

export const getAddCollectionsById = (store, id) =>
  getAddCollectionsState(store) ? { ...getAddCollectionsState(store).byIds[id], id } : {};

  export const getCollections = store =>
  getAddCollectionsList(store).map(id => getAddCollectionsById(store, id));