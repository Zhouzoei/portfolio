'use client';

export default function Heatmap() {
  const weeks = 26;
  const days = 7;
  const seed = 42;

  function pseudo(day: number) {
    const x = Math.sin(day * seed) * 10000;
    return x - Math.floor(x);
  }

  const weekdays = ['', '一', '', '三', '', '五', ''];
  const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月'];
  const monthOffsets = [0, 4, 9, 13, 17, 22];

  return (
    <div
      style={{
        background: 'var(--white)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        padding: '1rem 1.25rem 0.85rem',
        marginBottom: '0.75rem',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.5rem',
        }}
      >
        <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>活跃度</h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            fontSize: '0.62rem',
            color: 'var(--text-lighter)',
          }}
        >
          <span>少</span>
          <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#F0F6FF' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#D6E8FF' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#A8CCF0' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#5B9BD5' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#3578B0' }} />
          <span>多</span>
        </div>
      </div>

      {/* Months */}
      <div style={{ display: 'flex', marginBottom: '4px', marginLeft: '21px' }}>
        {monthNames.map((name, i) => {
          const next = i < monthNames.length - 1 ? monthOffsets[i + 1] : weeks;
          const w = (next - monthOffsets[i]) * 15;
          return (
            <span
              key={name}
              style={{
                display: 'inline-block',
                width: w + 'px',
                fontSize: '0.62rem',
                color: 'var(--text-lighter)',
              }}
            >
              {name}
            </span>
          );
        })}
      </div>

      {/* Body */}
      <div style={{ display: 'flex' }}>
        {/* Weekday labels */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
            marginRight: '6px',
            paddingTop: '18px',
          }}
        >
          {weekdays.map((d, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.62rem',
                color: 'var(--text-lighter)',
                height: '12px',
                lineHeight: '12px',
              }}
            >
              {d}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' as any }}>
          <div style={{ display: 'flex', gap: '3px' }}>
            {Array.from({ length: weeks }, (_, w) => {
              const col = (
                <div key={w} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {Array.from({ length: days }, (_, d) => {
                    const dayOffset = (weeks - 1 - w) * 7 + (6 - d);
                    const r = pseudo(dayOffset);
                    let lvl = 0;
                    if (r > 0.92) lvl = 4;
                    else if (r > 0.78) lvl = 3;
                    else if (r > 0.55) lvl = 2;
                    else if (r > 0.30) lvl = 1;
                    const colors = ['#F0F6FF', '#D6E8FF', '#A8CCF0', '#5B9BD5', '#3578B0'];
                    return (
                      <div
                        key={d}
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '3px',
                          background: colors[lvl],
                          transition: 'all 0.15s',
                          cursor: 'default',
                        }}
                        title={lvl > 0 ? `${lvl} 次修改` : ''}
                      />
                    );
                  })}
                </div>
              );
              return col;
            }).reverse()}
          </div>
        </div>
      </div>
    </div>
  );
}
