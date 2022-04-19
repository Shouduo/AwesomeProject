//
export const timeFormatter = (millsecond, format) => {
  const date = new Date(millsecond);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  const hour = `${date.getHours()}`.padStart(2, '0');
  const minute = `${date.getMinutes()}`.padStart(2, '0');
  const second = `${date.getSeconds()}`.padStart(2, '0');

  switch (format) {
    case 'MM-dd HH:mm:ss':
      return `${month}-${day} ${hour}:${minute}:${second}`;
    case 'yyyy-MM-dd HH:mm':
      return `${year}-${month}-${day} ${hour}:${minute}`;
    default:
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }
};

//
export const stringMasker = (
  str,
  schema,
  isTrim = true,
  mask = undefined,
  from = undefined,
  to = undefined,
) => {
  let targetMask = mask;
  let targetFrom = from;
  let targetTo = to;
  if (targetMask === undefined) {
    const potentialMasks = schema.match(/\W/g);
    const potentialMasksMap = potentialMasks.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
    targetMask = Object.keys(potentialMasksMap).reduce((a, b) =>
      potentialMasksMap[a] > potentialMasksMap[b] ? a : b,
    );
  }
  if (targetFrom === undefined) {
    targetFrom = schema.indexOf(targetMask);
  }
  if (targetTo === undefined) {
    targetTo = schema.lastIndexOf(targetMask) + 1;
  }
  const regExp = new RegExp(
    `^(.{${targetFrom}})(.{${Math.min(
      str.length - targetFrom,
      targetTo - targetFrom,
    )}})(.*)$`,
  );
  const replacer = (match, p1, p2, p3, offset, string) => {
    return `${p1}${targetMask.repeat(p2.length)}${p3}`;
  };

  const result = str.replace(regExp, replacer);
  if (isTrim) {
    return result.substring(0, schema.length);
  } else {
    return result;
  }
};

//
export const INITIAL_INFO = {
  cid: '220************609',
  name: '马*梅',
  phone: '189******64',
  city: '深圳',
  placeName: '米奇妙妙屋♂',
  placeId: '12***678',
};

//
export const QRCODE_TEMPLATE = {
  label: 'yss',
  cid: INITIAL_INFO.cid,
  cidtype: '1000',
  name: INITIAL_INFO.name,
  phone: INITIAL_INFO.phone,
  encode: 'IUpMWlVPWUtDVUYhWUNIVU9ZS0NVRiFTTlpVT1lLQ1VGIVBXVU9ZS0NVRiFNU0NV',
  c: 'G',
  t: 1646036243,
  v: 2,
  s: 'IUpMWlVPWUtDVUYhWUNIVU9ZS0NVRiFTTlpVT1lLQ1VGIVBXVU9ZS0NVRiFNU0NVT1lLQ1VGIU1LWVVPWUtDVU==',
};
