import { HackathonProject } from '../data/hackathonData';

/**
 * Ultra-high-resolution Canvas Generator for Case Study Dossier
 * 
 * Dimensions: 1600 x 2260 px
 * Designed specifically so that when mapped onto the 3D WebGL paper plane,
 * every word, badge, metric, and header is razor-sharp, high-contrast,
 * and effortlessly readable on any display (including high-DPI Retina/4K screens).
 */
export function generateCaseStudySheetDataUrl(project: HackathonProject, eventName: string): string {
  if (typeof document === 'undefined') return '';

  const canvas = document.createElement('canvas');
  canvas.width = 1600;
  canvas.height = 2260;
  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) return '';

  // 1. Archival Bright Off-White Paper Background
  ctx.fillStyle = '#FAF8F2';
  ctx.fillRect(0, 0, 1600, 2260);

  // Subtle architectural technical grid
  ctx.strokeStyle = 'rgba(17, 17, 17, 0.035)';
  ctx.lineWidth = 1.5;
  const gridSize = 50;
  for (let x = 0; x <= 1600; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 2260);
    ctx.stroke();
  }
  for (let y = 0; y <= 2260; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1600, y);
    ctx.stroke();
  }

  // 2. Heavy Neo-Brutalist Frame
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 8;
  ctx.strokeRect(50, 50, 1500, 2160);

  // Inner dashed margin
  ctx.setLineDash([12, 8]);
  ctx.lineWidth = 2.5;
  ctx.strokeRect(66, 66, 1468, 2128);
  ctx.setLineDash([]); // Reset dash

  // 3. Top Classified Banner
  ctx.fillStyle = '#111111';
  ctx.fillRect(66, 66, 1468, 105);

  ctx.fillStyle = '#F4D83D';
  ctx.font = 'bold 30px monospace';
  ctx.fillText('★ TECHNICAL DOSSIER // VERIFIED SPECIFICATION', 100, 130);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 24px monospace';
  ctx.textAlign = 'right';
  ctx.fillText(`DOC REF: #${project.id.toUpperCase()}-2026`, 1490, 130);
  ctx.textAlign = 'left';

  // 4. Metadata Strip
  ctx.fillStyle = '#F4D83D';
  ctx.fillRect(100, 205, 1400, 54);
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 3;
  ctx.strokeRect(100, 205, 1400, 54);

  ctx.fillStyle = '#111111';
  ctx.font = '900 24px monospace';
  ctx.fillText(
    `EVENT: ${eventName.toUpperCase()}  |  STAGE: ${project.stageLabel.toUpperCase()}`,
    124,
    240
  );

  // 5. Large Project Title & Subtitle
  ctx.fillStyle = '#111111';
  ctx.font = '900 78px sans-serif';
  ctx.fillText(project.name.toUpperCase(), 100, 345);

  if (project.subtitle) {
    ctx.fillStyle = '#444444';
    ctx.font = 'bold 32px monospace';
    ctx.fillText(project.subtitle, 100, 395);
  }

  // Official Red Stamp in top right
  ctx.save();
  ctx.translate(1220, 290);
  ctx.rotate(-0.09);
  ctx.strokeStyle = '#D9381E';
  ctx.lineWidth = 4.5;
  ctx.strokeRect(0, 0, 260, 80);
  ctx.setLineDash([8, 4]);
  ctx.strokeRect(6, 6, 248, 68);
  ctx.setLineDash([]);
  ctx.fillStyle = '#D9381E';
  ctx.font = '900 26px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('VERIFIED RECORD', 130, 48);
  ctx.restore();

  // 6. Quick Stats Grid (3 Large Metric Cards)
  let curY = 440;
  const statBoxWidth = 445;
  const statBoxHeight = 85;

  // Stat 1: Duration
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(100, curY, statBoxWidth, statBoxHeight);
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 3;
  ctx.strokeRect(100, curY, statBoxWidth, statBoxHeight);
  ctx.fillStyle = '#555555';
  ctx.font = 'bold 18px monospace';
  ctx.fillText('DEVELOPMENT SPRINT', 120, curY + 30);
  ctx.fillStyle = '#111111';
  ctx.font = '900 30px sans-serif';
  ctx.fillText(project.developmentTime, 120, curY + 68);

  // Stat 2: Challenge / Track
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(575, curY, statBoxWidth, statBoxHeight);
  ctx.strokeStyle = '#111111';
  ctx.strokeRect(575, curY, statBoxWidth, statBoxHeight);
  ctx.fillStyle = '#555555';
  ctx.font = 'bold 18px monospace';
  ctx.fillText('TRACK THEME', 595, curY + 30);
  ctx.fillStyle = '#111111';
  ctx.font = '900 28px sans-serif';
  ctx.fillText(project.challengeOrTheme.length > 20 ? project.challengeOrTheme.slice(0, 20) + '...' : project.challengeOrTheme, 595, curY + 68);

  // Stat 3: Outcome Badge
  ctx.fillStyle = '#111111';
  ctx.fillRect(1050, curY, statBoxWidth, statBoxHeight);
  ctx.strokeStyle = '#111111';
  ctx.strokeRect(1050, curY, statBoxWidth, statBoxHeight);
  ctx.fillStyle = '#F4D83D';
  ctx.font = 'bold 18px monospace';
  ctx.fillText('OFFICIAL RESULT', 1070, curY + 30);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 28px sans-serif';
  ctx.fillText(project.progressionBadge.text, 1070, curY + 68);

  curY += 120;

  // Helper function to draw crisp multi-line text with word wrap
  function drawWrappedText(
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number,
    maxLines = 4
  ): number {
    const words = text.split(' ');
    let line = '';
    let currentY = y;
    let linesDrawn = 0;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx!.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx!.fillText(line, x, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
        linesDrawn++;
        if (linesDrawn >= maxLines) {
          ctx!.fillText(line.trim() + '...', x, currentY);
          return currentY + lineHeight;
        }
      } else {
        line = testLine;
      }
    }
    ctx!.fillText(line, x, currentY);
    return currentY + lineHeight;
  }

  // SECTION 01: PROBLEM STATEMENT (Card Container)
  ctx.fillStyle = '#111111';
  ctx.fillRect(100, curY, 440, 44);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 22px monospace';
  ctx.fillText('01 / PROBLEM STATEMENT', 120, curY + 30);

  curY += 60;
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(100, curY, 1400, 150);
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 3.5;
  ctx.strokeRect(100, curY, 1400, 150);

  // Left yellow accent line inside card
  ctx.fillStyle = '#F4D83D';
  ctx.fillRect(100, curY, 16, 150);

  ctx.fillStyle = '#111111';
  ctx.font = 'bold 32px sans-serif';
  drawWrappedText(project.caseStudy.problemStatement.content, 140, curY + 48, 1320, 44, 3);

  curY += 185;

  // SECTION 02: PROPOSED ARCHITECTURE & WORKFLOW
  ctx.fillStyle = '#111111';
  ctx.fillRect(100, curY, 520, 44);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 22px monospace';
  ctx.fillText('02 / ARCHITECTURE & EXECUTION', 120, curY + 30);

  curY += 60;
  ctx.fillStyle = '#222222';
  ctx.font = 'bold 30px sans-serif';
  curY = drawWrappedText(project.caseStudy.proposedSolution.content, 100, curY + 10, 1400, 42, 2);

  // Workflow steps pills
  if (project.caseStudy.proposedSolution.workflowSteps) {
    curY += 15;
    const steps = project.caseStudy.proposedSolution.workflowSteps.slice(0, 3);
    steps.forEach((step, idx) => {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(100, curY, 1400, 56);
      ctx.strokeStyle = '#111111';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(100, curY, 1400, 56);

      ctx.fillStyle = '#F4D83D';
      ctx.fillRect(100, curY, 60, 56);
      ctx.strokeStyle = '#111111';
      ctx.strokeRect(100, curY, 60, 56);

      ctx.fillStyle = '#111111';
      ctx.font = '900 26px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`0${idx + 1}`, 130, curY + 38);
      ctx.textAlign = 'left';

      ctx.fillStyle = '#111111';
      ctx.font = 'bold 24px monospace';
      ctx.fillText(step.toUpperCase(), 180, curY + 37);

      curY += 70;
    });
  }

  curY += 25;

  // SECTION 03: VERIFIED TECH STACK
  ctx.fillStyle = '#111111';
  ctx.fillRect(100, curY, 440, 44);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 22px monospace';
  ctx.fillText('03 / VERIFIED TECH STACK', 120, curY + 30);

  curY += 65;
  let tagX = 100;
  const tags = project.caseStudy.techStack.tags.slice(0, 8);
  tags.forEach((tag) => {
    ctx.font = '900 24px monospace';
    const tagWidth = ctx.measureText(tag.toUpperCase()).width + 48;
    if (tagX + tagWidth > 1480) {
      tagX = 100;
      curY += 64;
    }
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(tagX, curY - 30, tagWidth, 50);
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 3;
    ctx.strokeRect(tagX, curY - 30, tagWidth, 50);

    ctx.fillStyle = '#111111';
    ctx.fillText(tag.toUpperCase(), tagX + 24, curY + 4);
    tagX += tagWidth + 18;
  });

  curY += 65;

  // SECTION 04: OUTCOMES & GROUNDING
  ctx.fillStyle = '#111111';
  ctx.fillRect(100, curY, 460, 44);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 22px monospace';
  ctx.fillText('04 / SPRINT OUTCOME & LESSONS', 120, curY + 30);

  curY += 60;
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(100, curY, 1400, 130);
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 3.5;
  ctx.strokeRect(100, curY, 1400, 130);

  ctx.fillStyle = '#111111';
  ctx.font = 'bold 30px sans-serif';
  drawWrappedText(project.caseStudy.outcomeAndLessonsLearned, 135, curY + 45, 1330, 42, 2);

  // 7. Bottom Security Barcode & Lead Engineer Sign-off
  const footerY = 2100;
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(100, footerY);
  ctx.lineTo(1500, footerY);
  ctx.stroke();

  // High-contrast Barcode
  let barX = 100;
  ctx.fillStyle = '#111111';
  const barPattern = [
    5, 2, 8, 3, 2, 6, 9, 4, 2, 7, 3, 5, 2, 4, 8, 2, 6, 3, 9, 2, 4, 7, 5, 2, 8,
    4, 2, 6, 9, 3, 7, 2, 5,
  ];
  barPattern.forEach((w) => {
    ctx.fillRect(barX, footerY + 15, w, 55);
    barX += w + 5;
  });
  ctx.font = 'bold 16px monospace';
  ctx.fillText(`* DOC-${project.id.toUpperCase()}-VERIFIED *`, 100, footerY + 95);

  // Official Signature Block
  ctx.textAlign = 'right';
  ctx.font = '900 22px monospace';
  ctx.fillStyle = '#111111';
  ctx.fillText('LEAD ENGINEER: MOHAMED SUHAIL M', 1500, footerY + 36);
  ctx.font = 'bold 18px monospace';
  ctx.fillStyle = '#555555';
  ctx.fillText('PORTFOLIO ARCHIVAL RECORD // CHENNAI, TN', 1500, footerY + 66);
  ctx.font = 'bold 15px monospace';
  ctx.fillStyle = '#D9381E';
  ctx.fillText('VERIFIED AUTHENTIC SPECIFICATION', 1500, footerY + 92);
  ctx.textAlign = 'left';

  return canvas.toDataURL('image/png');
}
