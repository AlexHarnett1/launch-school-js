objectContainsOther = (obj1, obj2) => {
  if (obj1.length < obj2.length) return false;

  obj2Keys = Object.keys(obj2);
  for (let i = 0; i < obj2Keys.length; i += 1) {
    let key = obj2Keys[i];
    if (obj2[key] !== obj1[key]) return false;
  }
  return true;
} 

(function () {
  let _ = function (element) {
    u = {
      // Array functions
      first() { return element[0]; },
      last() { return element[element.length - 1] },
      without(...args) {
        return element.filter(value => !args.includes(value));
      },
      lastIndexOf(value) {
        for (let i = element.length - 1; i >= 0; i -= 1) {
          if (element[i] === value) return i;
        }
        return -1;
      },
      sample(value) {
        mutableElem = element.slice();
        sampleValues = [];
        if (value === undefined) {
          return mutableElem[Math.floor(Math.random() * mutableElem.length)];
        } else {
          for (let i = 0; i < value; i += 1) {
            let index = Math.floor(Math.random() * mutableElem.length)
            sampleValues.push(mutableElem[index]);
            mutableElem.splice(index, 1);
          }
          return sampleValues;
        }
      },

      // Object functions
      findWhere(property) {
        for (let i = 0; i < element.length; i += 1) {
          if (objectContainsOther(element[i], property)) return element[i];
        }
        return undefined;
      },
      where(property) {
        return element.filter(obj => objectContainsOther(obj, property));
      },
      pluck(key) {
        let values = [];
        element.forEach(obj => {
          if (obj[key]) values.push(obj[key]);
        });
        return values;
      },
      keys() {
        let keys = [];
        for (let key in element) {
          keys.push(key);
        }

        return keys;
      },
      values() {
        let values = [];
        for (let key in element) {
          values.push(element[key]);
        }

        return values;
      },
      pick(...args) {
        let obj = {};
        args.forEach(key => obj[key] = element[key]);
        return obj;
      },
      omit(...args) {
        let obj = {};
        for (let key in element) {
          if (!args.includes(key)) obj[key] = element[key];
        }
        return obj;
      },
      has(key) {
        return element[key] !== undefined
      },
      
    }

    // ["isElement"].forEach(method => {
    //   u[method] = function () { _[method].call(u, element); };
    // });

    return u;
  };

  _.range = function (start, stop) {
    let arr = [];
    if (stop === undefined) {
      stop = start;
      start = 0;
    }
    for (let i = start; i < stop; i++) {
      arr.push(i);
    }
    return arr;
  };
  _.extend = function (...args) {
    let obj = args[0];
    for (let i = args.length - 1; i > 0; i -= 1) {
      for (let key in args[i]) {
        obj[key] = args[i][key];
      }
    }
    return obj;
  };

  _.isElement = function (obj) {
    return obj && obj.nodeType === 1;
  };

  window._ = _;
})();