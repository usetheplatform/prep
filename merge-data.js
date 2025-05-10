function mergeData(sessions) {
  const result = [];

  const usersMap = new Map();

  for (const session of sessions) {
    const { user, duration, equipment } = session;

    if (usersMap.has(user)) {
      const existing = usersMap.get(user);
      existing.duration += duration;
      existing.equipment = Array.from(
        new Set([...existing.equipment, ...equipment]),
      ).sort();
    } else {
      const newEntry = { user, duration, equipment: [...equipment] };
      result.push(newEntry);
      usersMap.set(user, newEntry);
    }
  }

  return result;
}
