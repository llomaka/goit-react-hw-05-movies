export default function isObjectEmpty(obj) {
    for (const name in obj) {
        if (obj.hasOwnProperty(name)) return false;
    }
    return true;
  }
