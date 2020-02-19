for (const animal of ['dog', 'cat', 'bird', 'shiba', 'fox']) {
  exports[animal] = async () => {
      const res = await require('node-fetch')(`https://get-animals.glitch.me/${animal}`);
      if (res.statusCode < 200 || res.statusCode > 299) throw new Error('Failed to load page, status code: ' + res.statusCode);
      return (await res.json()).url;
  }
}