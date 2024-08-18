import React from 'react';
import './button.css';

interface TradeButtonProps {
  onBuy: () => void;
  onSell: () => void;
  value: number;
  enabled: boolean;
}

function TradeButton({ onBuy, onSell, value, enabled }: TradeButtonProps) {
  return (
    <div className="trade-container">
      <button
        onClick={() => {
          if (value > 0) onSell();
        }}
        className="trade-button"
      >
        -
      </button>
      <input className="input-button" disabled={true} value={value} />
      <button disabled={!enabled} onClick={onBuy} className="trade-button">
        +
      </button>
    </div>
  );
}

export default TradeButton;
