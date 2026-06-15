import { useMemo, useState } from 'react';
import { TAX_SLABS, TAX_YEARS } from '../data/site';

const fmt = (n) =>
    'PKR ' + Math.round(n).toLocaleString('en-PK');

function computeTax(annual, year) {
    const slabs = TAX_SLABS[year] || TAX_SLABS[TAX_YEARS[0]];
    let tax = 0;
    let marginalRate = 0;
    let slabLabel = `0% — Up to PKR ${slabs[0].max.toLocaleString()}`;

    for (let i = slabs.length - 1; i >= 0; i--) {
        if (annual > slabs[i].min) {
            tax = slabs[i].fixed + (annual - slabs[i].min) * slabs[i].rate;
            marginalRate = slabs[i].rate * 100;
            slabLabel =
                slabs[i].rate === 0
                    ? `0% — Up to PKR ${slabs[i].max.toLocaleString()}`
                    : `${(slabs[i].rate * 100).toFixed(1)}% — PKR ${slabs[i].min.toLocaleString()}+`;
            break;
        }
    }

    // 9% surcharge on income above 10M for FY 2025-2026
    if (year === '2025-2026' && annual > 10000000) {
        tax += tax * 0.09;
    }

    const net = annual - tax;
    const effectiveRate = annual > 0 ? (tax / annual) * 100 : 0;
    return { tax, net, marginalRate, effectiveRate, slabLabel, slabs };
}

function TaxCalculator() {
    const [salaryType, setSalaryType] = useState('monthly');
    const [amount, setAmount] = useState('');
    const [year, setYear] = useState(TAX_YEARS[0]);
    const [result, setResult] = useState(null);

    const slabs = useMemo(() => TAX_SLABS[year], [year]);

    const handleCalculate = (e) => {
        e.preventDefault();
        const value = parseFloat(amount);
        if (!value || value <= 0) {
            setResult(null);
            return;
        }
        const annual = salaryType === 'monthly' ? value * 12 : value;
        const r = computeTax(annual, year);
        setResult({
            annual,
            monthlySalary: annual / 12,
            monthlyTax: r.tax / 12,
            monthlyNet: r.net / 12,
            yearlyTax: r.tax,
            yearlyNet: r.net,
            effectiveRate: r.effectiveRate,
            slabLabel: r.slabLabel,
        });
    };

    return (
        <section className="section calculator" id="calculator">
            <div className="container">
                <div className="section-head">
                    <span className="section-head__eyebrow">Free tool</span>
                    <h2 className="section-head__title">Income Tax Calculator</h2>
                    <p className="section-head__sub">
                        Estimate your Pakistan income tax liability across financial years using
                        official FBR salary slabs.
                    </p>
                </div>

                <div className="calculator__grid">
                    {/* Input card */}
                    <form className="calc-card" onSubmit={handleCalculate}>
                        <h3 className="calc-card__title">Calculate your tax</h3>

                        <div className="form-field">
                            <label>Salary type</label>
                            <div className="calc-toggle">
                                <button
                                    type="button"
                                    className={salaryType === 'monthly' ? 'is-active' : ''}
                                    onClick={() => setSalaryType('monthly')}
                                >
                                    <i className="fas fa-calendar-day" aria-hidden="true"></i> Monthly
                                </button>
                                <button
                                    type="button"
                                    className={salaryType === 'yearly' ? 'is-active' : ''}
                                    onClick={() => setSalaryType('yearly')}
                                >
                                    <i className="fas fa-calendar-alt" aria-hidden="true"></i> Yearly
                                </button>
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="calc-salary">
                                {salaryType === 'monthly' ? 'Monthly' : 'Annual'} salary (PKR)
                            </label>
                            <div className="input-icon">
                                <i className="fas fa-money-bill-wave" aria-hidden="true"></i>
                                <input
                                    id="calc-salary"
                                    type="number"
                                    min="0"
                                    step="1000"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder={`Enter your ${salaryType} salary`}
                                />
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="calc-year">Tax year</label>
                            <div className="input-icon">
                                <i className="fas fa-calendar-alt" aria-hidden="true"></i>
                                <select id="calc-year" value={year} onChange={(e) => setYear(e.target.value)}>
                                    {TAX_YEARS.map((y) => (
                                        <option key={y} value={y}>{y}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn--primary btn--block">
                            <i className="fas fa-calculator" aria-hidden="true"></i> Calculate Tax
                        </button>
                    </form>

                    {/* Result / slabs card */}
                    <div className="calc-result">
                        {result ? (
                            <>
                                <div className="calc-result__head">
                                    <h3>Your estimate · {year}</h3>
                                    <span className="calc-result__rate">
                                        {result.effectiveRate.toFixed(1)}%
                                        <small>effective rate</small>
                                    </span>
                                </div>

                                <div className="calc-result__tables">
                                    <div>
                                        <h4>Monthly</h4>
                                        <div className="kv"><span>Salary</span><b>{fmt(result.monthlySalary)}</b></div>
                                        <div className="kv"><span>Tax</span><b className="kv--tax">{fmt(result.monthlyTax)}</b></div>
                                        <div className="kv"><span>Take-home</span><b className="kv--net">{fmt(result.monthlyNet)}</b></div>
                                    </div>
                                    <div>
                                        <h4>Yearly</h4>
                                        <div className="kv"><span>Salary</span><b>{fmt(result.annual)}</b></div>
                                        <div className="kv"><span>Tax</span><b className="kv--tax">{fmt(result.yearlyTax)}</b></div>
                                        <div className="kv"><span>Take-home</span><b className="kv--net">{fmt(result.yearlyNet)}</b></div>
                                    </div>
                                </div>

                                <p className="calc-result__slab">
                                    <i className="fas fa-layer-group" aria-hidden="true"></i>
                                    Applicable slab: {result.slabLabel}
                                </p>
                                <p className="calc-result__note">
                                    Estimates are for guidance only. Contact us for an exact, filed return.
                                </p>
                            </>
                        ) : (
                            <div className="calc-slabs">
                                <h3>Tax slabs · {year}</h3>
                                <ul>
                                    {slabs.map((s, i) => (
                                        <li key={i}>
                                            <span>
                                                {s.min === 0
                                                    ? `Up to PKR ${s.max.toLocaleString()}`
                                                    : s.max === Infinity
                                                        ? `Above PKR ${s.min.toLocaleString()}`
                                                        : `PKR ${(s.min + 1).toLocaleString()} – ${s.max.toLocaleString()}`}
                                            </span>
                                            <b>{(s.rate * 100).toFixed(s.rate * 100 % 1 === 0 ? 0 : 1)}%</b>
                                        </li>
                                    ))}
                                </ul>
                                <p className="calc-result__note">
                                    Enter your salary and hit calculate to see your personalised estimate.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TaxCalculator;
