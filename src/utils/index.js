export const constructImageSource = (image) => {
  const { id, server, farm, secret } = image;
  let url;

  if (id && server && farm && secret) {
    url = `http://farm${farm}.static.flickr.com/${server}/${id}_${secret}_m.jpg'`;
  }
  return url
}