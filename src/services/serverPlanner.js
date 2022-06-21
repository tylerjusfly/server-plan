const hasCapacity = (value, capacity, total, key) => {
  total[key] += value;
  return total[key] <= capacity;
};

const resetTotals = (vm, total) => {
  total.CPU = vm.CPU;
  total.RAM = vm.RAM;
  total.HDD = vm.HDD;
};

const calculate = (serverType, virtualMachines) => {
  const data = {
    servers: 1,
    totals: {
      CPU: 0,
      RAM: 0,
      HDD: 0,
    },
  };

  virtualMachines.forEach((vm) => {
    const capacityChecks = [];

    Object.keys(vm).forEach((key) => {
      capacityChecks.push(hasCapacity(vm[key], serverType[key], data.totals, key));
    });

    if (capacityChecks.includes(false)) {
      resetTotals(vm, data.totals);
      data.servers++;
    }
  });

  return data.servers;
};

module.exports = calculate;
