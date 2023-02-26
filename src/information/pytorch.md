# PyTorch

## install `nvidia390`
```bash
sudo xbps-install -S nvidia390
```

## cuda 10.1

```bash
wget -c https://developer.nvidia.com/compute/cuda/10.1/Prod/local_installers/cuda_10.1.105_418.39_linux.run

sudo sh cuda_10.1.105_418.39_linux.run --silent --toolkit --override --tmpdir=$PWD/dir3
```

TODO:
- [x] fixed gcc12 unssuprted by `--override` flag
- [ ] install `gcc12` by `xbps`

## conda

Requirement:
- `python3.7.5`
- `pytorch=1.3.1`
- `torchvision=0.4.2`
- `cudatoolkit=9.2.148`
- `cudnn=7.6.3`
```bash
conda create --yes -n env5 python=3.7
conda install \
        pytorch=1.3.1 \
        torchvision=0.4.2 \
        cudatoolkit=9.2.148 \
        cudnn=7.6.3 \
      -c pytorch
```


```bash
conda install \
        pytorch=1.1.0 \
        torchvision=0.3.0 \
        cudatoolkit=9.0 \
        cudnn=7.5 \
      -c pytorch
```
