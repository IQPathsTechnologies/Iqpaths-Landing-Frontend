import styles from "./PaymentReceipt.module.css";

const PaymentReceipt = ({ receiptData, onClose }) => {
  if (!receiptData) return null;

  const { name, email, amount, paymentId, date } = receiptData;

  const handlePrint = () => {
    const printContent = document.getElementById("printable-receipt").innerHTML;
    const printWindow = window.open("", "_blank", "width=600,height=700");
    printWindow.document.write(`
  <html>
    <head>
      <title>Payment Receipt - IQPaths</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { 
          width: 100%; 
          height: auto; 
          overflow: hidden;
        }
        body { font-family: Arial, sans-serif; padding: 1.5rem; background: #fff; }
        
        /* ── Blank page fix ── */
        @page { 
          size: auto; 
          margin: 10mm; 
        }
        @media print {
          html, body { height: auto !important; overflow: visible !important; }
        }

        .receiptHeader { display: flex; justify-content: space-between; margin-bottom: 1rem; }
        .companyName { font-size: 1.4rem; font-weight: 700; color: #6366f1; }
        .receiptLabel { font-size: 0.9rem; color: #888; }
        .divider { border: none; border-top: 1px solid #e5e7eb; margin: 1rem 0; }
        .row { display: flex; justify-content: space-between; padding: 0.4rem 0; }
        .label { color: #6b7280; font-size: 0.9rem; }
        .value { font-weight: 500; font-size: 0.9rem; }
        .amountRow { display: flex; justify-content: space-between; padding: 0.5rem 0; }
        .amountLabel { font-weight: 600; font-size: 1rem; }
        .amountValue { font-weight: 700; font-size: 1.1rem; color: #6366f1; }
        .status { text-align: center; margin-top: 1rem; color: #16a34a; font-weight: 700; letter-spacing: 2px; }
        .statusDot { display: inline-block; width: 8px; height: 8px; background: #16a34a; border-radius: 50%; margin-right: 6px; }
      </style>
    </head>
    <body>${printContent}</body>
  </html>
`);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} id="receipt-modal">
        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={styles.title}>Payment Successful!</h2>
          <p className={styles.subtitle}>
            Your internship application has been received.
          </p>
        </div>

        {/* ── Receipt Box ── */}
        <div className={styles.receiptBox} id="printable-receipt">
          <div className={styles.receiptHeader}>
            <span className={styles.companyName}>IQPaths</span>
            <span className={styles.receiptLabel}>Payment Receipt</span>
          </div>

          <div className={styles.divider} />

          <div className={styles.row}>
            <span className={styles.label}>Name</span>
            <span className={styles.value}>{name}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>{email}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Date</span>
            <span className={styles.value}>{date}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Payment ID</span>
            <span className={styles.value}>{paymentId}</span>
          </div>

          <div className={styles.divider} />

          <div className={styles.amountRow}>
            <span className={styles.amountLabel}>Amount Paid</span>
            <span className={styles.amountValue}>₹{amount}</span>
          </div>

          <div className={styles.status}>
            <span className={styles.statusDot} /> PAID
          </div>
        </div>

        {/* ── Buttons ── */}
        <div className={styles.actions}>
          <button className={styles.printBtn} onClick={handlePrint}>
            🖨️ Print / Save PDF
          </button>
          <button className={styles.closeBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentReceipt;
