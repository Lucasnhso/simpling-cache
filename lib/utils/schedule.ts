async function setScheduleDelay(delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay));
}

async function createSchedule(delay: number, task: any) {
  await setScheduleDelay(delay);
  task();
}

export { createSchedule };
