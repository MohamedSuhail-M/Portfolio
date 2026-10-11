// Downloads the authentic, original Microsoft Word-formatted PDF of Mohamed Suhail M
export const downloadResumePdf = () => {
  const resumeUrl = '/resume-mohamed-suhail.pdf';
  const fileName = 'Mohamed_Suhail_M_Resume.pdf';

  fetch(resumeUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then((blob) => {
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 2500);
    })
    .catch(() => {
      // Fallback direct link download
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = fileName;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
};

