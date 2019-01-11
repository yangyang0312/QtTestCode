#include "MainWindow.h"
#include "ui_MainWindow.h"
#include <QtWidgets>
#include <QVideosurfaceFormat>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    camera_ = new QCamera;
    surface_ = new MyVideoSurface(this);
    camera_->setViewfinder(surface_);
    camera_->start();
}

MainWindow::~MainWindow()
{
    delete ui;
}

QSize MainWindow::sizeHint() const
{
    return surface_->surfaceFormat().sizeHint();
}

void MainWindow::paintEvent(QPaintEvent *event)
{
    QPainter painter(this);
    if (surface_->isActive()) {
        const QRect videoRect = surface_->videoRect();
        if (!videoRect.contains(event->rect())) {
            QRegion region = event->region();
            region = region.subtracted(videoRect);
            QBrush brush = palette().background();
            for (const QRect &rect : region){
                painter.fillRect(rect, brush);
            }
        }
        surface_->paint(&painter);//在主窗口绘制
    } else {
        painter.fillRect(event->rect(), palette().background());
    }
}

void MainWindow::resizeEvent(QResizeEvent *event)
{
    QMainWindow::resizeEvent(event);
    surface_->updateVideoRect();
}
