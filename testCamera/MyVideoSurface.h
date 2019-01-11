#ifndef MYVIDEOSURFACE_H
#define MYVIDEOSURFACE_H

#include <QAbstractVideoSurface>
#include <QImage>
#include <QRect>
#include <QVideoFrame>

class MyVideoSurface : public QAbstractVideoSurface
{
    Q_OBJECT

public:
    MyVideoSurface(QWidget *widget, QObject *parent = 0);
    QList<QVideoFrame::PixelFormat> supportedPixelFormats(QAbstractVideoBuffer::HandleType handleType = QAbstractVideoBuffer::NoHandle) const override;
    bool isFormatSupported(const QVideoSurfaceFormat &format) const override;
    bool start(const QVideoSurfaceFormat &format) override;
    bool present(const QVideoFrame &frame) override;
    void stop() override;
    QRect videoRect() const;
    void updateVideoRect();
    void paint(QPainter *painter);

private:
    QWidget      * widget_;
    QImage::Format imageFormat_;
    QRect          targetRect_;
    QSize          imageSize_;
    QVideoFrame    currentFrame_;
};

#endif
