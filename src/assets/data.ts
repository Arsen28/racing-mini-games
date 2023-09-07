const userData:any[] = [{}];

for (let i = 0; i < 1000; i++) {
  userData.push({
    name: "Михаил Лихачев",
    time: "00:00.0000",
    speed: "80",
    penaltyTime: "00:00.0000",
  });
}

userData.shift();

export default userData;
