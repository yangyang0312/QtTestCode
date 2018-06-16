#include "MainWindow.h"
#include "ui_MainWindow.h"
#include <QFileDialog>
#include <QDir>
#include <QDebug>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    ui->listWidget->setIconSize(QSize(240, 180));
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_btn_open_clicked()
{
    QString path = QFileDialog::getExistingDirectory(this,"打开文件夹");
    if(!path.isEmpty())
    {
        path += "\\";
        QDir dir(path);
        QStringList list = dir.entryList(QDir::Files | QDir::NoSymLinks | QDir::Readable);
        while(ui->listWidget->count() > 0)    //清空列表
        {
            QListWidgetItem * item = ui->listWidget->takeItem(0);
            delete item;
        }
        for(int i = 0;i < list.size();++i)
        {
            if(list[i].endsWith(".jpg") || list[i].endsWith(".png") || list[i].endsWith(".bmp") || list[i].endsWith(".gif") || list[i].endsWith(".tiff"))
            {
                QListWidgetItem * item = new QListWidgetItem(QIcon(path + list[i]),list[i]);
                item->setSizeHint(QSize(240,220));
                item->setFlags(Qt::ItemIsSelectable | Qt::ItemIsEnabled);
                ui->listWidget->addItem(item);
            }
        }
    }
}
