const env = (name: string, alt?: string | number) => {
  const envValue = process.env[name] || alt;
  if (!envValue) {
    throw new Error(`Environment variable ${name} is not set`);
  }
  return envValue;
};

export {env};
export default env