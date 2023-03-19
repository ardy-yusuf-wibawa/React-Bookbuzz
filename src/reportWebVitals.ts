const reportWebVitals = (onPerfEntry: (metric: unknown) => void): void => {
  if (typeof onPerfEntry === 'function') {
    void import('web-vitals').then(
      ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry)
        getFID(onPerfEntry)
        getFCP(onPerfEntry)
        getLCP(onPerfEntry)
        getTTFB(onPerfEntry)
      }
    )
  }
}

export default reportWebVitals
