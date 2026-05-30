import styles from "./PaymentReceipt.module.css";

const PaymentReceipt = ({ receiptData, onClose }) => {
  if (!receiptData) return null;

  const { name, email, amount, paymentId, date } = receiptData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} id="receipt-modal">

        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={styles.title}>Payment Successful!</h2>
          <p className={styles.subtitle}>Your internship application has been received.</p>
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
