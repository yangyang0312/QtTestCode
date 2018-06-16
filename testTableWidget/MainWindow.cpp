#include "MainWindow.h"
#include "ui_MainWindow.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    std::vector<QString>vec;

    vec.push_back("aaa");       //测试数据
    vecChecked.push_back(true);
    vec.push_back("bbbbbb");
    vecChecked.push_back(true);
    vec.push_back("cccc");
    vecChecked.push_back(false);
    vec.push_back("dddd");
    vecChecked.push_back(true);
    vec.push_back("eeee");
    vecChecked.push_back(false);
    vec.push_back("ff");
    vecChecked.push_back(false);
    vec.push_back("GG");
    vecChecked.push_back(true);
    vec.push_back("HHH");
    vecChecked.push_back(false);
    vec.push_back("DDDDD");
    vecChecked.push_back(true);
    vec.push_back("RRR");
    vecChecked.push_back(true);
    vec.push_back("EEE");
    vecChecked.push_back(false);
    vec.push_back("TTT");
    vecChecked.push_back(true);
    vec.push_back("YYY");
    vecChecked.push_back(false);

    ui->tableWidget->setColumnWidth(0,500);   //初始化
    ui->tableWidget->setRowCount(vec.size());
    for(size_t i = 0;i < vec.size();++i)
    {
        ui->tableWidget->setRowHeight(i,60);
        QTableWidgetItem * item = new QTableWidgetItem();
        item->setTextAlignment(Qt::AlignLeft | Qt::AlignVCenter);
        item->setIcon(QIcon(vecChecked[i] ? ":/checked.png" : ":/unchecked.png"));
        item->setText(vec[i]);
        ui->tableWidget->setItem(i,0,item);
    }
}
void MainWindow::on_tableWidget_cellClicked(int row, int column)//选中、取消选中
{
    vecChecked[row] = !vecChecked[row];
    ui->tableWidget->item(row,column)->setIcon(QIcon(vecChecked[row] ? ":/checked.png" : ":/unchecked.png"));
}
MainWindow::~MainWindow()
{
    delete ui;
}
