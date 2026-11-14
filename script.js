function formatBDT(num) {
  return "৳ " + Number(num).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function calculateRebate() {
  const openingCost = parseFloat(document.getElementById("openingCost").value) || 0;
  const closingCost = parseFloat(document.getElementById("closingCost").value) || 0;
  const deposit = parseFloat(document.getElementById("deposit").value) || 0;
  const withdrawal = parseFloat(document.getElementById("withdrawal").value) || 0;

  const netInflow = deposit - withdrawal;
  const incrementalCost = closingCost - openingCost;

  // Method 1: Net Inflow Cap Method
  const method1 = Math.max(0, Math.min(netInflow, incrementalCost));

  // Method 2: Incremental Holding Method
  const method2 = Math.max(0, incrementalCost);

  // Method 3: Closing Cumulative Method
  const method3 = Math.max(0, closingCost);

  // Update UI
  document.getElementById("netInflowDisplay").textContent = formatBDT(netInflow);
  document.getElementById("incrementalCostDisplay").textContent = formatBDT(incrementalCost);

  document.getElementById("method1Amount").textContent = formatBDT(method1);
  document.getElementById("method2Amount").textContent = formatBDT(method2);
  document.getElementById("method3Amount").textContent = formatBDT(method3);
}

const inputIds = ["openingCost", "closingCost", "deposit", "withdrawal", "ledgerBalance"];
inputIds.forEach(id => {
  document.getElementById(id).addEventListener("input", calculateRebate);
});

// Initialize on load
calculateRebate();
