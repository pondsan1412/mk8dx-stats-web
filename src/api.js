const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://www.mk8dx-lounge.com/api';

// ฟังก์ชันสำหรับเรียกข้อมูลผู้เล่นตาม mkcId
export async function getPlayerByMkcId(mkcId) {
  try {
    const response = await fetch(`${CORS_PROXY}${BASE_URL}/player?mkcId=${mkcId}`, {
      headers: {
        'origin': 'localhost',
        'x-requested-with': 'XMLHttpRequest'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

// ฟังก์ชันสำหรับเรียกข้อมูลผู้เล่นตามชื่อ
export async function getPlayerByName(name) {
  try {
    const response = await fetch(`${CORS_PROXY}${BASE_URL}/player?name=${name}`, {
      headers: {
        'origin': 'localhost',
        'x-requested-with': 'XMLHttpRequest'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

// ฟังก์ชันสำหรับเรียกข้อมูลรายละเอียดผู้เล่นตามชื่อ
export async function getPlayerDetailsByName(name) {
  try {
    const response = await fetch(`${CORS_PROXY}${BASE_URL}/player/details?name=${name}`, {
      headers: {
        'origin': 'localhost',
        'x-requested-with': 'XMLHttpRequest'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

// ฟังก์ชันสำหรับเรียกข้อมูลผู้เล่นตามช่วง MMR
export async function getPlayersByMmrRange(minMmr, maxMmr) {
  try {
    const response = await fetch(`${CORS_PROXY}${BASE_URL}/player/list?minMmr=${minMmr}&maxMmr=${maxMmr}`, {
      headers: {
        'origin': 'localhost',
        'x-requested-with': 'XMLHttpRequest'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

// ฟังก์ชันสำหรับเรียกข้อมูล Table ตาม ID
export async function getTableById(tableId) {
  try {
    const response = await fetch(`${CORS_PROXY}${BASE_URL}/table?tableId=${tableId}`, {
      headers: {
        'origin': 'localhost',
        'x-requested-with': 'XMLHttpRequest'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

// ฟังก์ชันสำหรับเรียกข้อมูลรายชื่อ Table ทั้งหมด
export async function getTableList() {
  try {
    const response = await fetch(`${CORS_PROXY}${BASE_URL}/table/list`, {
      headers: {
        'origin': 'localhost',
        'x-requested-with': 'XMLHttpRequest'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

// ฟังก์ชันสำหรับเรียกข้อมูลการลงโทษผู้เล่นตามชื่อ
export async function getPenaltyByName(name) {
  try {
    const response = await fetch(`${CORS_PROXY}${BASE_URL}/penalty/list?name=${name}`, {
      headers: {
        'origin': 'localhost',
        'x-requested-with': 'XMLHttpRequest'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}
